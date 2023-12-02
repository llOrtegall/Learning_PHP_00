import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function NavBar () {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
    e.target.reset()
    navigate(`/search?keyword=${search}`)
  }

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
          <li>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Search'
                defaultValue={search} onChange={e => setSearch(e.target.value)} />
              <button type='submit'>Find</button>
            </form>
          </li>
        </ul>
      </nav>
    </>

  )
}
