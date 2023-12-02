import { Route, Routes } from 'react-router-dom'

import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'

export function App () {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </>
  )
}
