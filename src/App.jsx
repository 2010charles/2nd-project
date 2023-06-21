import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Career from './components/Career'
import Home from './components/Home'
import Login from './components/Login'
import Specialization from './components/Specialization'
import Register from './components/Register'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

function App() {

  return (
    <div>
    <BrowserRouter>
     <Navbar/>
   
      <Routes>
       <Route path ='/home' element={<Home/>}/>
       <Route path ='/about' element={<About/>}/>
       <Route path ='/career' element={<Career/>}/>
       <Route path ='/specialization' element={<Specialization/>}/>
       <Route path ='/login' element={<Login/>}/>
       <Route path ='/register' element={<Register/>}/>
      </Routes>
       <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
