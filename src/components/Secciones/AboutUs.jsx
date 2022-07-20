import Footer from "../layouts/Footer";
import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Principios from "../About_us/Principios";
import Team from "../About_us/Team";

const AboutUs = () => {
  useEffect(() => {
    document.title = `Banco Pide Ya - Sobre Nosotros`;
  }, []);
  return (
    <div>
      <Navbar />
      <Principios />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutUs;
