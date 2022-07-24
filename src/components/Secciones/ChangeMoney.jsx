import React, { useEffect } from "react";
import InforCambiaMoneda from "../Changemoney/InforCambiaMoneda";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const ChangeMoney = () => {
    useEffect(() =>{
        document.title= `Banco Pide Ya - Cambia tu moneda`
      }, []);     

  return (
    <div>
      <Navbar />
      <InforCambiaMoneda/>
      <Footer/>
    </div>
  );
};

export default ChangeMoney;
