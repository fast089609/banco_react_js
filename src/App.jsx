import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Index from './components/Secciones/Index'
import AboutUs from './components/Secciones/AboutUs';
import Services from './components/Secciones/Services';
import ChangeMoney from './components/Secciones/ChangeMoney';
import LoginRegister from './components/Secciones/LoginRegister';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about_us"  element={<AboutUs />}/>
        <Route path="/change_money" element={<ChangeMoney />} />
        <Route path="/services" element={<Services />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
      </Routes>
    </div>
  )
}

export default App
