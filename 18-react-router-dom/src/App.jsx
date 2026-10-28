import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div>
        <Navbar/>
{/* // User clicks About
//         |
//         v
// <Link to="/about">
//         |
//         v
// Browser URL becomes /about
//         |
//         v
// React Router matches path="/about"
//         |
//         v
// <About /> component renders 
 to → Where do I want to go?
path → Which component should render at this URL? */}



      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path ='/about' element = {<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
  


    </div>
  )
}

export default App

