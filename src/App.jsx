import { useState, createContext, useEffect } from 'react'
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
import Configuracion from './components/Secciones/Configuracion';
import Billeteras from './components/Secciones/Billeteras';


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    window.URL_API_BACKEND = "http://localhost:8000/";
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about_us"  element={<AboutUs />}/>
        <Route path="/change_money" element={<ChangeMoney />} />
        <Route path="/services" element={<Services />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/configuracion" element={
          <ProtectedRoute>
            <Configuracion />
          </ProtectedRoute>
        } />
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
        <Route path="/billeteras" element={
            <ProtectedRoute>
              <Billeteras/>
            </ProtectedRoute>
          } />
      </Routes>
    </div>
  )
}

export default App
