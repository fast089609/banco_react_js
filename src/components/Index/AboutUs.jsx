import React from "react";
import "./../../css/about.css";
import bancovertica from "./../../images/banco_vertical.jpg";

const AboutUs = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div className="mb-12 lg:mb-0">
              <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 about_us_info">
                <h2 className="text-3xl font-bold mb-6">Banco Pide ya</h2>
                <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                Nuestra empresa enfocada en el sector del sistema financiero, o el departamento de una entidad
                crediticia, especializado en financiar compañías y personas. Ofreciendo diversos
                productos y servicios. Esto, con el fin de que la firmas puedan expandir su actividad comercial,
                realizar distintas inversiones y prosperar cada dia.
                </p>
                <p className="text-gray-500 mb-0">
                La empresa opera a través de cinco segmentos: banca personal, banca para pymes, 
                banca corporativa, banca preferencial y servicios de microfinanza. Sus productos y 
                servicios de banca personal consisten en cuentas corriente y de ahorro, tarjetas de 
                crédito y débito, depósitos a plazo fijo, créditos comerciales y de consumo, entre 
                otros. El banco también ofrece una serie de servicios de banca corporativa que incluyen
                soluciones de liquidez e inversión, soluciones financieras (capital de trabajo, créditos
                de fomento y garantías bancarias), comercio exterior, leasing, productos de inversión y 
                fiducia de administración
                </p>
              </div>
            </div>

            <div>
              <img
                src={bancovertica}
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
