import React from "react";
import imagenServicios from "../../images/imagen_servicios.jpg"

const Service = () => {
  return (
    <section className="text-gray-600 body-font text-center">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-green-700 text-3xl my-4 font-semibold">
          Productos y Servicios
        </h1>
        <img src={imagenServicios} className="w-3/6 h-96 mx-auto my-10 rounded-lg shadow-2xl shadow-green-700"/>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://elceo.com/wp-content/uploads/2020/06/creditos_fotoartecl.jpg"
              className="rounded-full w-32 h-32"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
              Creditos Inmediatos
            </h2>
            <p className="leading-relaxed text-base">
              Pide tu credito ya! en nuestro banco el servicio cuenta con un
              interes de muy buen precio.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Mas Informacion
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
              Pide Tu Tarjeta
            </h2>
            <p className="leading-relaxed text-base">
              Puedes pedir tu tarjeta, la couta de maneja es bastante economica,
              ademas de beneficiarte de muchos regalos y promociones que
              diarimente ofrecemos.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Mas Informacion
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://www.mycreditunion.gov/sites/default/files/toolkit-graphics/shutterstock_440831971.jpg"
              className="rounded-full w-32 h-32"
            />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://forbes.es/wp-content/uploads/2018/02/asesor_financiero_mediolanum.jpg"
              className="rounded-full w-32 h-32"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
              Asesor Virtual
            </h2>
            <p className="leading-relaxed text-base">
              Pide un asesor virtual por nuestro canal o tambien puedes
              llamarno, adicional si dejas tu telefono en nuestros registros,
              nosotros te llamaremos, estamos disponibles las 24 horas.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Mas Informacion
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
              Pagos
            </h2>
            <p className="leading-relaxed text-base">
              Haz consignaciones, transacciones y demas, puedes pagar tu nomina
              mediante nuestro canal virtual.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Mas Informacion
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://economipedia.com/wp-content/uploads/Pagos-en-tesorer%C3%ADa.jpg"
              className="rounded-full w-32 h-32"
            />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              src="https://img.freepik.com/vector-gratis/concepto-evaluacion-credito-dibujado-mano-documentos_23-2149154259.jpg?w=2000"
              className="rounded-full w-32 h-32"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
              Solicitud de documentos
            </h2>
            <p className="leading-relaxed text-base">
              Expedimos todos los documentos necesarios, puedes pedirlo por
              nuestro canal virtual o contactarte con un asesor y este te los
              hara llegar a tu domicilio.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Mas Informacion
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
