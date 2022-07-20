import React, { useEffect } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Service from "../Services/Service";

const Services = () => {
    useEffect(() =>{
        document.title= `Banco Pide Ya - Servicios`
      }, []);     
  return (
    <div>
      <Navbar />
      <Service/>
      <Footer/>
    </div>
  );
};

export default Services;
