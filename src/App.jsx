import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Index from './components/Secciones/Index'
import AboutUs from './components/Secciones/AboutUs';
import Services from './components/Secciones/Services';
import ChangeMoney from './components/Secciones/ChangeMoney';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/change_money" element={<ChangeMoney />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
