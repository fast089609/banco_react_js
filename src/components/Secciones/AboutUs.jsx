import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";

const AboutUs = () => {
  useEffect(() => {
    document.title = `Banco Pide Ya - Sobre Nosotros`;
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mt-20 text-red-700">Sobre noisotros</div>
    </div>
  );
};

export default AboutUs;
