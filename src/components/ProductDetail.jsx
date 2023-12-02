export function ProductDetail () {
  const product = {
    id: 1,
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
    image: 'https://picsum.photos/200/300'
  }
  return (
    <>
      <h1>Product Detail</h1>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </>
  )
}
