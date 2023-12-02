import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function ProductsList ({ products }) {
  return (
    <>
      <h1>Products List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <Link to={`/products/${product.id}`}>more datail ...</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
