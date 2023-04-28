import './App.css'
import { Routes, Route, Link, NavLink } from "react-router-dom"
import About from './components/about'
import Home from './components/home'

function App() {


  return (

    <>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='about' >About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>

  )
}

export default App
