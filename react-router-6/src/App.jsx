import './App.css'
import { Routes, Route, Link, NavLink } from "react-router-dom"
import About from './pages/about'
import Home from './pages/home'
import React from 'react'

function App() {


  return (

    <>
      <header>
        <Link to='/' >#VANLIFE</Link>
        <nav>
          <Link to='/about' >About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>

  )
}

export default App
