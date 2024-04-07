import { React, useState,useEffect } from 'react'
import './App.css'
import {Home, About, Contact, SeeMore} from "./pages";
import {Routes, Route} from "react-router-dom";
import './index.css'
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <Routes>
    <Route path= "/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/seeMore" element={<SeeMore/>}/>
  </Routes>
  )
}

export default App
