import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './home/home'
import About from './About/about'

function App() {


  return (
   <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/About' element={<About/>} /> */}

   </Routes>
  )
}

export default App
