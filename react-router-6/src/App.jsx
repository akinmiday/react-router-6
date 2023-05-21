import React from 'react'
import './App.css'
import { Routes, Route, Link, NavLink } from "react-router-dom"
import About from './pages/about'
import Home from './pages/home'
import Vans from './pages/vans'
import VanDetail from './pages/vandetail'
import './server'
import Layout from './components/layout'
import Header from './components/header'


function App() {

  return (

    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
