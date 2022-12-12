import { useState, createContext } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Index from './components/Secciones/Index'
import AboutUs from './components/Secciones/AboutUs';
import Services from './components/Secciones/Services';
import ChangeMoney from './components/Secciones/ChangeMoney';
import LoginRegister from './components/Secciones/LoginRegister';
import IndexDash from './components/Secciones/Dash/Index';
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import AccesoNoAutorizado from './components/layouts/AccesoNoAutorizado';
import CloseSesion from './components/utils/CloseSesion';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about_us"  element={<AboutUs />}/>
        <Route path="/change_money" element={<ChangeMoney />} />
        <Route path="/services" element={<Services />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/acceso_no_autorizado" element={<AccesoNoAutorizado />} />
        <Route path="/dash/*" element={
          <ProtectedRoute roles={['administrador']}>
            <IndexDash/>
          </ProtectedRoute>
        } />
        <Route path="/closeSession" element={
          <ProtectedRoute>
            <CloseSesion/>
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
