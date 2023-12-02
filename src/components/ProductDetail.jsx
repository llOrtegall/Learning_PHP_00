import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export function ProductDetail () {
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduct(res.data)
      })
  }, [id])

  return (
    <>
    {!product && <em>Cargando...</em>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>Precio: {product.price}</p>
          <p>{product.description}</p>
          <p>{product.stock}</p>
          <p>{product.category}</p>
          <p><img src={product.images[0]} alt="imagen" /></p>
          <Link to='/products'>Volver A Prodcuts</Link>
        </div>
      )}
    </>
  )
}
