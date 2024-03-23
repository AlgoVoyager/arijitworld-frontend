import React from 'react'
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
const App = () => {
  return (
   

    <BrowserRouter >
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='about' element={<About />} />
        <Route path='about' element={<About />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App