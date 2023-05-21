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
import DashBoard from './pages/host/dashboard'
import Income from './pages/host/income'
import Reviews from './pages/host/reviews'
import HostLayout from './pages/host/hostlayout'


function App() {

  return (

    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />


          <Route path='host' element={<HostLayout />}>
            <Route index element={<DashBoard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>

  )
}

export default App
