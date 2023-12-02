import { ProductsList } from '../components/ProductsList'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export function SearchResults () {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${searchParams.get('keyword')}`)
      .then(res => {
        setProducts(res.data.products)
      })
  }, [searchParams])
  return (
    <div>
      <h4>Search results</h4>
      {products.length === 0 && <p>No products found</p>}
      {products.length && <ProductsList products={products}/>}
    </div>
  )
}
