import React, { useEffect } from 'react'
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Login from '../LoginRegister/login';

const LoginRegister = () => {
    useEffect(() =>{
        document.title= `Banco Pide Ya - Ingresa / Registrate`
    }, []);
  return (
    <div>
        <Navbar/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default LoginRegister;