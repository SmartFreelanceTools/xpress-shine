'use client'

import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import type { Product } from '../src/components/app/product'

const KEY = 'xs-products-v1'
let mem: Product[] | null = null

/** Last products we saw, kept in memory and in localStorage so the shop can paint instantly. */
export function readCachedProducts(): Product[] | null {
  if (mem) return mem
  try {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(KEY) : null
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) mem = parsed as Product[]
    }
  } catch {}
  return mem
}

function writeCache(list: Product[]) {
  mem = list
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list))
  } catch {}
}

/**
 * Shows cached products immediately (if any), then refreshes from the database.
 * New products added in admin appear as soon as the refresh finishes.
 */
export function useProducts() {
  const [products, setProducts] = useState<Product[]>(mem || [])
  const [loading, setLoading] = useState(!mem)

  useEffect(() => {
    let alive = true
    const cached = readCachedProducts()
    if (cached) {
      setProducts(cached)
      setLoading(false)
    }
    supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (!alive) return
        if (data) {
          writeCache(data as Product[])
          setProducts(data as Product[])
        }
        setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [])

  return { products, loading }
}
