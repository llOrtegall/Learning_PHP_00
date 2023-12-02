import { Routes, Route } from 'react-router-dom'
import { ProductDetail } from '../components/ProductDetail'

// eslint-disable-next-line react/prop-types
export function Products ({ test }) {
  return (
    <>
      <h4>Products Prop {test}</h4>
      <Routes>
        <Route path=':id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}
