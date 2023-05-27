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
import HostVan from './pages/host/hostvan'
import HostVanDetail from './pages/host/hostvandetail'
import HostVanPricing from './pages/host/hostvanpricing'
import HostVanPhotos from './pages/host/hostvanphotos'
import HostVanInfo from './pages/host/hostvaninfo'


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
            <Route path='vans' element={<HostVan />} />
            <Route path='vans/:id' element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>

  )
}

export default App
