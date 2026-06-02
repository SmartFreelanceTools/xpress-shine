'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type Product = {
  id: string
  name: string
  description: string
  price: string
  oldPrice?: string
  image: string
  rating: number
  reviews: number
  created_at: string
}

/* ───────────────────────────────────────────────
   BACKGROUND (DO NOT CHANGE)
─────────────────────────────────────────────── */
function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute w-[700px] h-[700px] -top-40 -left-40 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute w-[600px] h-[600px] top-20 -right-40 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute w-[500px] h-[500px] bottom-[-100px] left-[30%] rounded-full bg-sky-200/30 blur-3xl" />

      <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-white/40 blur-sm animate-pulse" />
      <div className="absolute top-[40%] right-[8%] w-10 h-10 rounded-full bg-white/30 blur-sm animate-pulse" />
      <div className="absolute bottom-20 left-[18%] w-12 h-12 rounded-full bg-white/20 blur-sm animate-pulse" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:20px_20px]" />

    </div>
  )
}

export default function ProductUpload() {

  const [file, setFile] = useState<File | null>(null)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [oldPrice, setOldPrice] = useState('')

  const [rating, setRating] = useState(4.5)
  const [reviews, setReviews] = useState(100)

  const [products, setProducts] = useState<Product[]>([])

  const [editingId, setEditingId] = useState<string | null>(null)
  const [existingImage, setExistingImage] = useState('')

  // FETCH
  const fetchProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    setProducts(data || [])
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // UPLOAD
  const uploadProduct = async () => {

  // EDIT MODE
  if (editingId) {

    let imageUrl = existingImage

    // upload new image if selected
    if (file) {

      const fileName = `${Date.now()}-${file.name}`

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, file)

      if (uploadError) return alert(uploadError.message)

      const { data } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName)

      imageUrl = data.publicUrl
    }

    const { error } = await supabase
      .from('products')
      .update({
        name,
        description,
        price,
        oldPrice,
        image: imageUrl,
        rating,
        reviews,
      })
      .eq('id', editingId)

    if (error) return alert(error.message)

    alert('Product updated successfully')

    setEditingId(null)
    setExistingImage('')
  }

  // CREATE MODE
  else {

    if (!file) return alert('Please select image')

    const fileName = `${Date.now()}-${file.name}`

    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, file)

    if (uploadError) return alert(uploadError.message)

    const { data } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName)

    const { error } = await supabase
      .from('products')
      .insert({
        name,
        description,
        price,
        oldPrice,
        image: data.publicUrl,
        rating,
        reviews,
      })

    if (error) return alert(error.message)

    alert('Product uploaded successfully')
  }

  // RESET
  setName('')
  setDescription('')
  setPrice('')
  setOldPrice('')
  setRating(4.5)
  setReviews(100)
  setFile(null)

  fetchProducts()
}

  // DELETE
  const deleteProduct = async (id: string, imageUrl: string) => {
    await supabase.from('products').delete().eq('id', id)

    const path = imageUrl.split('/product-images/')[1]

    if (path) {
      await supabase.storage.from('product-images').remove([path])
    }

    fetchProducts()
  }

  return (
    <div className="relative min-h-screen p-6 bg-[#f8faff]">

      <Background />

      <div className="relative z-10 space-y-6 max-w-[1700px] mx-auto">

        {/* Premium Header */}
<div className="mb-8">

  {/* Top Label */}
  <div className="flex items-center gap-2 mb-4">

    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />

    <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-blue-700">
      Product Studio
    </span>

  </div>

  </div>

  

        {/* FORM */}
<div
  className="
    relative
    overflow-hidden
    bg-white/65
    backdrop-blur-2xl
    border
    border-white/50
    rounded-[34px]
    p-7
    md:p-8
    space-y-5
    shadow-[0_20px_60px_rgba(37,99,235,0.10)]
  "
>

  {/* PREMIUM GLOW */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    <div
      className="absolute -top-24 -right-24 w-[260px] h-[260px] rounded-full blur-3xl opacity-30"
      style={{
        background:
          'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
      }}
    />

    <div
      className="absolute -bottom-24 -left-24 w-[220px] h-[220px] rounded-full blur-3xl opacity-20"
      style={{
        background:
          'radial-gradient(circle, rgba(6,182,212,0.30), transparent 70%)',
      }}
    />

  </div>

  {/* TOP LABEL */}
  <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">

    <div>

      <div className="flex items-center gap-2 mb-2">

        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

        <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-blue-700">
          Product Upload Studio
        </span>

      </div>

      <h2
        className="text-2xl md:text-3xl font-black tracking-tight text-slate-900"
        style={{
          fontFamily: "'Syne',sans-serif",
        }}
      >
        Premium Product
        <span className="text-blue-600"> Manager</span>
      </h2>

    </div>

    {/* LIVE STATUS */}
    <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-100">

      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

      <span className="text-[11px] uppercase tracking-[0.2em] text-emerald-700 font-bold">
        Live Inventory
      </span>

    </div>

  </div>

  {/* FILE INPUT */}
  <div
    className="
      relative
      z-10
      rounded-[28px]
      border-2
      border-dashed
      border-blue-200
      bg-gradient-to-br
      from-blue-50/80
      to-cyan-50/60
      p-6
      transition-all
      hover:border-blue-400
    "
  >

    <input
      type="file"
      onChange={(e) => setFile(e.target.files?.[0] || null)}
      className="
        w-full
        text-sm
        text-slate-600
        file:mr-4
        file:rounded-2xl
        file:border-0
        file:bg-gradient-to-r
        file:from-blue-600
        file:to-cyan-500
        file:px-5
        file:py-3
        file:text-sm
        file:font-bold
        file:text-white
        file:shadow-lg
        file:cursor-pointer
        hover:file:scale-[1.02]
      "
    />

    <p className="mt-3 text-xs text-slate-500 font-medium">
      Upload premium storefront visuals for your products.
    </p>

  </div>

  {/* INPUTS */}
  <div className="relative z-10 grid md:grid-cols-2 gap-4">

    <input
      placeholder="Product name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="
        w-full
        rounded-[24px]
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        px-5
        py-4
        text-sm
        font-medium
        text-slate-800
        placeholder:text-slate-400
        outline-none
        transition-all
        focus:border-blue-400
        focus:ring-4
        focus:ring-blue-100
      "
    />

    <input
      placeholder="Price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="
        w-full
        rounded-[24px]
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        px-5
        py-4
        text-sm
        font-medium
        text-slate-800
        placeholder:text-slate-400
        outline-none
        transition-all
        focus:border-blue-400
        focus:ring-4
        focus:ring-blue-100
      "
    />

  </div>

  <div className="relative z-10">

    <input
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="
        w-full
        rounded-[24px]
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        px-5
        py-4
        text-sm
        font-medium
        text-slate-800
        placeholder:text-slate-400
        outline-none
        transition-all
        focus:border-blue-400
        focus:ring-4
        focus:ring-blue-100
      "
    />

  </div>

  <div className="relative z-10 grid md:grid-cols-2 gap-4">

    <input
      placeholder="Old Price (optional)"
      value={oldPrice}
      onChange={(e) => setOldPrice(e.target.value)}
      className="
        w-full
        rounded-[24px]
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        px-5
        py-4
        text-sm
        font-medium
        text-slate-800
        placeholder:text-slate-400
        outline-none
        transition-all
        focus:border-blue-400
        focus:ring-4
        focus:ring-blue-100
      "
    />

    <input
      type="number"
      placeholder="Reviews (e.g 137)"
      value={reviews}
      onChange={(e) => setReviews(Number(e.target.value))}
      className="
        w-full
        rounded-[24px]
        border
        border-white/50
        bg-white/80
        backdrop-blur-xl
        px-5
        py-4
        text-sm
        font-medium
        text-slate-800
        placeholder:text-slate-400
        outline-none
        transition-all
        focus:border-blue-400
        focus:ring-4
        focus:ring-blue-100
      "
    />

  </div>

  {/* RATING */}
  <div
    className="
      relative
      z-10
      rounded-[26px]
      bg-white/70
      border
      border-white/50
      p-5
      backdrop-blur-xl
    "
  >

    <div className="flex items-center justify-between mb-4">

      <div>
        <p className="text-sm font-bold text-slate-800">
          Product Rating
        </p>

        <p className="text-xs text-slate-500 mt-1">
          Adjust customer satisfaction score
        </p>
      </div>

      <div className="px-4 py-2 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 font-black text-sm">
        ⭐ {rating.toFixed(1)}
      </div>

    </div>

    <input
      type="range"
      min="1"
      max="5"
      step="0.1"
      value={rating}
      onChange={(e) => setRating(Number(e.target.value))}
      className="
        w-full
        accent-blue-600
        cursor-pointer
      "
    />

  </div>

  {/* BUTTON */}
  <button
    onClick={uploadProduct}
    className="
      relative
      overflow-hidden
      w-full
      rounded-[26px]
      py-4
      text-sm
      font-black
      text-white
      transition-all
      duration-300
      hover:scale-[1.01]
      active:scale-[0.99]
    "
    style={{
      background:
        'linear-gradient(135deg,#2563eb,#1d4ed8,#06b6d4)',
      boxShadow:
        '0 20px 40px rgba(37,99,235,0.28)',
    }}
  >

    <span className="relative z-10">
      {editingId ? 'Update Product' : 'Upload Product'}
    </span>

    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)] translate-x-[-100%] hover:translate-x-[100%] duration-1000" />

  </button>

</div>

        {/* PRODUCTS */}
        <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    2xl:grid-cols-5
    gap-5
  "
>


          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden border">

              <img src={p.image} className="h-40 w-full object-cover" />

              <div className="p-3 space-y-1">

                <p className="font-bold">{p.name}</p>
                <p className="text-sm text-gray-500">{p.description}</p>

                <div className="flex gap-2 items-center">
                  <p className="font-semibold">{p.price}</p>
                  {p.oldPrice && (
                    <p className="line-through text-gray-400 text-sm">
                      {p.oldPrice}
                    </p>
                  )}
                </div>

                <p className="text-sm text-amber-500">
                  ⭐ {p.rating.toFixed(1)} ({p.reviews} reviews)
                </p>

                <button
  onClick={() => {

    setEditingId(p.id)

    setName(p.name)
    setDescription(p.description)
    setPrice(p.price)
    setOldPrice(p.oldPrice || '')
    setRating(p.rating)
    setReviews(p.reviews)

    setExistingImage(p.image)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }}
  className="
    bg-blue-600
    text-white
    px-3 py-1
    rounded
    text-sm
    mr-2
  "
>
  Edit
</button>

                <button
                  onClick={() => deleteProduct(p.id, p.image)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}