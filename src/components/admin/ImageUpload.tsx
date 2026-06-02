'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { supabase } from '@/lib/supabase'

type Category =
  | 'Uploaded'
  | 'Washing'
  | 'Ironing'
  | 'Logistics'
  | 'Premium'

type GalleryImage = {
  id: string
  image_url: string
  title: string
  subtitle: string
  category: Category
  created_at: string
}

type Toast = {
  id:number
  message:string
  type:'success'|'error'|'info'
}

const CATEGORIES:Category[]=[
'Uploaded',
'Washing',
'Ironing',
'Logistics',
'Premium'
]

const CATEGORY_STYLES = {
Uploaded:{bg:'bg-slate-500/10',text:'text-slate-200',dot:'bg-slate-300'},
Washing:{bg:'bg-sky-500/10',text:'text-sky-200',dot:'bg-sky-300'},
Ironing:{bg:'bg-amber-500/10',text:'text-amber-200',dot:'bg-amber-300'},
Logistics:{bg:'bg-violet-500/10',text:'text-violet-200',dot:'bg-violet-300'},
Premium:{bg:'bg-cyan-500/10',text:'text-cyan-200',dot:'bg-cyan-300'}
}



function Background(){
return(
<div className="absolute inset-0 overflow-hidden pointer-events-none">

<div className="absolute w-[700px] h-[700px] -top-40 -left-40 rounded-full bg-blue-200/40 blur-3xl"/>
<div className="absolute w-[600px] h-[600px] top-20 -right-40 rounded-full bg-cyan-200/30 blur-3xl"/>
<div className="absolute w-[500px] h-[500px] bottom-[-100px] left-[30%] rounded-full bg-sky-200/30 blur-3xl"/>

<div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-white/40 blur-sm animate-pulse"/>
<div className="absolute top-[40%] right-[8%] w-10 h-10 rounded-full bg-white/30 blur-sm animate-pulse"/>
<div className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full bg-white/20 blur-sm animate-pulse"/>

<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:20px_20px]" />

</div>
)
}



function ToastContainer({toasts,remove}:any){

return(

<div className="fixed top-5 right-5 z-50 space-y-2">

{toasts.map((t:any)=>(

<div
key={t.id}
className="bg-white border rounded-xl shadow p-3"
>

{t.message}

<button
onClick={()=>remove(t.id)}
className="ml-3"
>
×
</button>

</div>

))}

</div>

)

}



function CategoryBadge({category}:{category:Category}){

const style=CATEGORY_STYLES[category]

return(
<span className={`px-2 py-1 rounded text-xs ${style.bg} ${style.text}`}>
{category}
</span>
)

}



export default function ImageUpload(){

const [file,setFile]=useState<File|null>(null)
const [preview,setPreview]=useState<string|null>(null)

const [title,setTitle]=useState('')
const [subtitle,setSubtitle]=useState('')
const [category,setCategory]=useState<Category>('Uploaded')

const [editingId,setEditingId]=useState<string|null>(null)

const [images,setImages]=useState<GalleryImage[]>([])

const [toasts,setToasts]=useState<Toast[]>([])

const toastId=useRef(0)



const addToast=(message:string)=>{

const id=++toastId.current

setToasts(prev=>[
...prev,
{
id,
message,
type:'info'
}
])

setTimeout(()=>{

setToasts(prev=>
prev.filter(t=>t.id!==id)
)

},3000)

}



const resetForm=()=>{

setTitle('')
setSubtitle('')
setCategory('Uploaded')
setEditingId(null)

setFile(null)
setPreview(null)

}



const fetchImages=useCallback(async()=>{

const {data,error}=await supabase
.from('gallery')
.select('*')
.order('created_at',{
ascending:false
})

if(!error){

setImages(data || [])

}

},[])



useEffect(() => {
  fetchImages()
}, [fetchImages])





const uploadOrUpdate=async()=>{

try{


// UPDATE

if(editingId){

const {error}=await supabase

.from('gallery')

.update({

title,
subtitle,
category

})

.eq('id',editingId)


if(error) throw error


addToast('Updated')

resetForm()

await fetchImages()

return

}



// UPLOAD

if(!file)
return addToast('Select image')


const fileName=
`${Date.now()}-${file.name}`


const {error:uploadError}=

await supabase.storage

.from('gallery')

.upload(

fileName,
file

)


if(uploadError)
throw uploadError



const {data}=

supabase.storage

.from('gallery')

.getPublicUrl(fileName)



const {error:insertError}=

await supabase

.from('gallery')

.insert({

image_url:
data.publicUrl,

title,
subtitle,
category

})


if(insertError)
throw insertError


addToast('Uploaded')

resetForm()

await fetchImages()

}

catch(err:any){

addToast(
err.message
)

}

}




const deleteImage = async (
  id: string,
  url: string
) => {
  try {

    // instantly remove from UI
    setImages(prev =>
      prev.filter(img => img.id !== id)
    )

    // delete database row
    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id)

    if (error) throw error

    // delete storage image
    const path = url.split(
      '/storage/v1/object/public/gallery/'
    )[1]

    if (path) {
      await supabase.storage
        .from('gallery')
        .remove([path])
    }

    addToast('✨ Image removed successfully')

  } catch (err: any) {

    addToast(err.message)

    // reload if error happens
    fetchImages()
  }
}


const editImage=(img:GalleryImage)=>{

setEditingId(img.id)

setTitle(img.title)

setSubtitle(img.subtitle)

setCategory(img.category)

window.scrollTo({

top:0,
behavior:'smooth'

})

}




return(

<div className="relative min-h-screen bg-[#f8faff] p-6">

<Background/>


<ToastContainer

toasts={toasts}

remove={(id:any)=>

setToasts(prev=>

prev.filter(

t=>t.id!==id

)

)

}

/>

{/* Premium Admin Header */}
<div className="relative z-10 mb-8">

  {/* Top label */}
  <div className="flex items-center gap-2 mb-4">

    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />

    <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-cyan-700">
      Gallery Studio
    </span>

  </div>

  

</div>



<div className="relative z-10 max-w-6xl mx-auto space-y-10">


<div
  className="
    relative
    overflow-hidden
    rounded-[36px]
    p-7
    md:p-8
    max-w-2xl
    border
    border-white/60
    backdrop-blur-2xl
  "
  style={{
    background: 'rgba(255,255,255,0.72)',
    boxShadow: '0 25px 80px rgba(37,99,235,0.10)',
  }}
>

  {/* PREMIUM GLOW */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div
      className="absolute w-[420px] h-[420px] -top-32 -right-24 rounded-full blur-3xl opacity-40"
      style={{
        background:
          'radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)',
      }}
    />

    <div
      className="absolute w-[320px] h-[320px] -bottom-20 -left-16 rounded-full blur-3xl opacity-40"
      style={{
        background:
          'radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)',
      }}
    />

    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:22px_22px]" />

  </div>

  <div className="relative z-10">

    {/* TOP BADGE */}
    <div className="flex items-center gap-2 mb-6">

      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

      <span className="text-[11px] uppercase tracking-[0.28em] font-bold text-cyan-700">
        Luxury Upload Panel
      </span>

    </div>

    {/* TITLE */}
    <h2
      className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-none"
      style={{
        fontFamily: "'Syne',sans-serif",
      }}
    >
      Curate Premium
      <span className="block text-cyan-600 mt-1">
        Gallery Content
      </span>
    </h2>

    <p className="mt-4 text-slate-500 leading-relaxed max-w-lg">
      Upload polished visuals, organize luxury categories,
      and maintain a modern premium storefront experience.
    </p>

    {/* PREVIEW */}
    {preview && (
      <div className="mt-8 relative overflow-hidden rounded-[28px] border border-white/50">

        <img
          src={preview}
          className="w-full h-[260px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute bottom-5 left-5">

          <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl text-white text-xs font-bold border border-white/20">
            Live Preview
          </span>

        </div>

      </div>
    )}

    {/* FILE PICKER */}
    <div className="mt-8">

      <label
        className="
          group
          flex
          items-center
          justify-between
          gap-4
          rounded-[28px]
          border
          border-dashed
          border-cyan-200
          bg-white/60
          px-5
          py-5
          cursor-pointer
          transition-all
          hover:border-cyan-400
          hover:bg-white/80
        "
      >

        <div>

          <p className="text-sm font-bold text-slate-800">
            Upload Luxury Image
          </p>

          <p className="text-xs text-slate-500 mt-1">
            JPG, PNG or WEBP supported
          </p>

        </div>

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            text-white
            shadow-lg
            group-hover:scale-110
            transition-transform
          "
        >
          ✦
        </div>

        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0]

            if (f) {
              setFile(f)

              setPreview(
                URL.createObjectURL(f)
              )
            }
          }}
        />

      </label>

      {file && (
        <p className="mt-3 text-xs text-slate-500 font-medium">
          Selected: {file.name}
        </p>
      )}

    </div>

    {/* INPUTS */}
    <div className="mt-7 space-y-4">

      <input
        placeholder="Gallery title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="
          w-full
          rounded-[24px]
          border
          border-white/50
          bg-white/70
          backdrop-blur-xl
          px-5
          py-4
          text-sm
          font-semibold
          outline-none
          transition-all
          focus:ring-4
          focus:ring-cyan-100
          focus:border-cyan-300
        "
      />

      <textarea
        placeholder="Short luxury description..."
        value={subtitle}
        onChange={(e) =>
          setSubtitle(e.target.value)
        }
        rows={4}
        className="
          w-full
          rounded-[24px]
          border
          border-white/50
          bg-white/70
          backdrop-blur-xl
          px-5
          py-4
          text-sm
          outline-none
          resize-none
          transition-all
          focus:ring-4
          focus:ring-cyan-100
          focus:border-cyan-300
        "
      />

    </div>

    {/* CATEGORY */}
    <div className="mt-7">

      <p className="text-xs uppercase tracking-[0.22em] font-bold text-slate-500 mb-4">
        Select Category
      </p>

      <div className="flex flex-wrap gap-3">

        {CATEGORIES.map((cat) => {

          const active = category === cat

          return (
            <button
              key={cat}
              onClick={() =>
                setCategory(cat)
              }
              className={`
                px-5
                py-3
                rounded-2xl
                text-sm
                font-bold
                transition-all
                duration-300
                border
                ${
                  active
                    ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg scale-105'
                    : 'bg-white/70 text-slate-600 border-white/40 hover:bg-white'
                }
              `}
            >
              {cat}
            </button>
          )
        })}

      </div>

    </div>

    {/* ACTIONS */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4">

      <button
        onClick={uploadOrUpdate}
        className="
          flex-1
          py-4
          rounded-[24px]
          text-white
          font-bold
          transition-all
          hover:scale-[1.02]
        "
        style={{
          background:
            'linear-gradient(135deg,#06b6d4,#2563eb)',
          boxShadow:
            '0 15px 40px rgba(37,99,235,0.25)',
        }}
      >
        {editingId
          ? 'Update Gallery Image'
          : 'Upload Premium Visual'}
      </button>

      {editingId && (
        <button
          onClick={resetForm}
          className="
            px-8
            py-4
            rounded-[24px]
            border
            border-slate-200
            bg-white/70
            font-semibold
            text-slate-700
            hover:bg-white
            transition-all
          "
        >
          Cancel Edit
        </button>
      )}

    </div>

  </div>

</div>




<div className="grid md:grid-cols-3 gap-4">

{images.map(img=>(

<div
key={img.id}
className="bg-white rounded-xl overflow-hidden"
>

<img
src={img.image_url}
className="h-44 w-full object-cover"
/>


<div className="p-4 space-y-2">

<CategoryBadge
category={img.category}
/>

<p className="font-bold">
{img.title}
</p>

<p className="text-xs">
{img.subtitle}
</p>



<div className="flex gap-2">

<button

onClick={()=>
editImage(img)
}

className="flex-1 bg-blue-500 text-white py-1 rounded"

>

Edit

</button>



<button

onClick={()=>
deleteImage(
img.id,
img.image_url
)
}

className="flex-1 bg-red-500 text-white py-1 rounded"

>

Delete

</button>

</div>

</div>

</div>

))}

</div>

</div>

</div>

)

}