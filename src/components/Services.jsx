import React from "react";
import conoce_economia from "../images/conoce_economia.jpg";
import cambia_moneda from "../images/cambia_la_moneda.jpg";
import productos_servicios from "../images/productos_servicios.png";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div className="w-full">
      <div className="w-full mt-14">
        <h1 className="text-center text-green-400 text-3xl font-bold">Elige a tu gusto ...</h1>
      </div>
      <div className="w-full px-5 lg:mx-auto lg:w-3/4">
        <div className="grid grid-cols-1 gap-14 mt-5 md:grid-cols-3 xl:grid-cols-3">
          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-green-600 bg-green-200 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-green-300"
              src={conoce_economia}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white text-center">
              Conoce mas de la economia actual
            </h1>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-green-600 bg-green-200 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-green-300"
              src={cambia_moneda}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white text-center">
              Cambia la moneda que desees
            </h1>
          </div>
          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-green-600 bg-green-200 rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-green-300"
              src={productos_servicios}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white text-center">
              <FontAwesomeIcon icon={faCirclePlus} /> productos <br />{" "}
              <FontAwesomeIcon icon={faCirclePlus} /> servicios
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
