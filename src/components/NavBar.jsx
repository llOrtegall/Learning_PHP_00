import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <>
    <h1>Welcome To Page</h1>
     <nav className='navBar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </nav>
    </>

  )
}
