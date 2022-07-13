import React from "react";
import banco from '../images/banco_pide_ya.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
      <div class="w-full mt-16 mx-auto">
        <footer class="p-4 bg-gray-200 sm:p-6">
          <div class="md:flex md:justify-between">
            <div class="mb-2 md:mb-0">
              <a href="#" target="_blank" class="flex items-center">
                <img
                  src={banco}
                  class="mr-4 h-10"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Banco Pide Ya
                </span>
              </a>
            </div>
            <div className="flex">
                <FontAwesomeIcon icon={faFacebook} className="mr-5 text-3xl text-blue-700" />
                <FontAwesomeIcon icon={faGoogle} className="mr-5 text-3xl text-red-500" />
                <FontAwesomeIcon icon={faInstagram} className=" text-3xl text-indigo-600" />
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Acerca de nosotros
                </h3>
              </div>
              <div>
                <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Cambia tu moneda
                </h3>
              </div>
              <div>
                <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Productos y servicios
                </h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
