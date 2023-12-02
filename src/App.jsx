import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'

export function App () {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products/*' element={<Products test={50 + 50}/>} />
        </Route>

        {/* // TODO: Rutas para el profile */}
        {/* <Route path='/account' element={<h1>Account</h1>}>
          <Route path='settings' element={<h1>Settings</h1>} />
          <Route path='billing' element={<h1>Billing</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Route> */}
      </Routes>
    </>
  )
}
