import { Routes, Route } from 'react-router-dom'
import { ProductDetail } from '../components/ProductDetail'
import { ProductsList } from '../components/ProductsList'
import axios from 'axios'
import { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export function Products () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        console.log(res.data.products)
        setProducts(res.data.products)
      })
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<ProductsList products={products} />} />
        <Route path=':id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}
