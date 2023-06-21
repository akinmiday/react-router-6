import React from 'react'
import './App.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import About from './pages/about'
import Home from './pages/home'
import Vans, { loader as vansLoader } from './pages/vans'
import VanDetail, { loader as vanDetailLoader } from './pages/vandetail'
import Layout from './components/layout'
import Header from './components/header'
import DashBoard from './pages/host/dashboard'
import Income from './pages/host/income'
import Reviews from './pages/host/reviews'
import HostLayout from './pages/host/hostlayout'
import HostVan, { loader as hostVanLoader } from './pages/host/hostvan'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/host/hostvandetail'
import HostVanPricing from './pages/host/hostvanpricing'
import HostVanPhotos from './pages/host/hostvanphotos'
import HostVanInfo from './pages/host/hostvaninfo'
import NotFound from './pages/notfound'
import ErrorPage from './pages/error'
import Login from './pages/Login'
import { requireAuth } from './utils'


import './server'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />

      <Route path='vans' element={<Vans />}
        errorElement={<ErrorPage />}
        loader={vansLoader}
      />
      <Route
        path='vans/:id'
        element={<VanDetail />}
        loader={vanDetailLoader}
      />

      <Route path='host' element={<HostLayout />}>
        <Route
          index
          element={<DashBoard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='income'
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='vans'
          element={<HostVan />}
          loader={hostVanLoader}
        />
        <Route
          path='vans/:id'
          element={<HostVanDetail />}
          loader={hostVanDetailLoader} >

          <Route index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />

          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route
        path="*"
        element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
