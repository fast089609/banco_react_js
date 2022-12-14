import React from "react";
import fotolealtad from "./../../images/lealtad.jpg";
import fotohonestidad from "./../../images/honestidad.jpg";
const Principios = () => {
  return (
    <div>
      <div
        id="services"
        className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h1 className="text-3xl leading-normal mb-2 font-bold text-green-700">
              Nuestros Principios
            </h1>
            <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
              Nos destacamos por cumplir cada uno de nuestras normas.
            </p>
          </header>
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-green-100 border-b border-green-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg cursor-pointer">
                <div className="inline-block text-gray-900 mb-4 text-center">
                  <img
                    src={fotolealtad}
                    className="w-28 h-28 mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-2xl leading-normal mb-2 font-semibold text-green-700">
                  Lealtad
                </h3>
                <p className="text-gray-500">
                  Somos leales y fieles a cada uno de nuestros clientes,
                  identificando a el banco como la institucion de gran valor.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-green-100 border-b border-green-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg cursor-pointer">
                <div className="inline-block text-gray-900 mb-4 text-center">
                  <img
                    src={fotohonestidad}
                    className="w-28 h-28 mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-2xl leading-normal mb-2 font-semibold text-green-700">
                  Honestidad
                </h3>
                <p className="text-gray-500">
                  Con nuestro clientes tratamos de dar las mejores tasas de
                  interes siendo asi lo mas honestos posibles en cuanto al
                  margen de ganancias permitidos.
                </p>
              </div>
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="py-8 px-12 mb-12 bg-green-100 border-b border-green-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg cursor-pointer">
                <div className="inline-block text-gray-900 mb-4 text-center">
                  <img
                    src="https://conceptoabc.com/wp-content/uploads/2021/09/Responsabilidad.jpg"
                    className="w-28 h-28 mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-2xl leading-normal mb-2 font-semibold text-green-700">
                  Responsabilidad
                </h3>
                <p className="text-gray-500">
                  Estamos siempre disponibles para ti las 24 horas, te
                  resolveremos dudas e inconvenientes que puedas presentar con
                  la mayor seriedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principios;
