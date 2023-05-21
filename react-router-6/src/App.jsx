import React from 'react'
import './App.css'
import { Routes, Route, Link, NavLink } from "react-router-dom"
import About from './pages/about'
import Home from './pages/home'
import Vans from './pages/vans'

import './server'

function App() {


  return (

    <>
      <header>
        <Link to='/' >#VANLIFE</Link>
        <nav>
          <Link to='/about' >About</Link>
          <Link to='/vans' >Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </>

  )
}

export default App
