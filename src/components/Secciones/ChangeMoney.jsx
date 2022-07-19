import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";

const ChangeMoney = () => {
    useEffect(() =>{
        document.title= `Banco Pide Ya - Cambia tu moneda`
      }, []);     

  return (
    <div>
      <Navbar />
      <div className="mt-20 text-red-700">Cambiar de moneda</div>
    </div>
  );
};

export default ChangeMoney;
