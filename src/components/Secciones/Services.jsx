import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";

const Services = () => {
    useEffect(() =>{
        document.title= `Banco Pide Ya - Servicios`
      }, []);     
  return (
    <div>
      <Navbar />
      <div className="mt-20 text-red-700">Servicios</div>
    </div>
  );
};

export default Services;
