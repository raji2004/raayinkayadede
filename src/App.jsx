import { React, useState } from 'react'
import './App.css'
import {Home, About, Contact} from "./pages";
import {Routes, Route} from "react-router-dom";
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path= "/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  )
}

export default App
