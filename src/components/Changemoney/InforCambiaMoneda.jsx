import React, { useState } from "react";
import seleccionaImg from "../../images/seleccionar.png";
import venderImg from "../../images/vender.png";
import InfoIMG from "../../images/informacion.png";
import cambiarImg from "../../images/cambiar.png";
import InfoMonedaImge from "../../images/mostrar.png";
import IntentaloImg from "../../images/intentalo.png";
import Cambio from "./Cambio";
import Comprar from "./ComprarVender";
import imagenComprar from "./../../images/venta-al-por-mayor.png";
import imagenVender from "./../../images/vender_moneys.png";

const InforCambiaMoneda = () => {
  const [change, setSelectChange] = useState("");

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-semibold text-center title-font text-green-700 mb-4">
            Cambia tu moneda en tiempo real y con los mejores precios
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Cambia tu moneda, verifica sus precios, compra o vende tu moneda
            segun las divisas que manejes y cuanto tengas en tu cuenta personal.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-green-100 cursor-pointer hover:shadow-green-700 hover:shadow-2xl">
              <img src={seleccionaImg} className="w-10 h-10 mr-2" />
              <span className="title-font font-medium">
                Selecciona que quieres hacer, cambiar, comprar o vender monedas.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-green-100 cursor-pointer hover:shadow-green-700 hover:shadow-2xl">
              <img src={venderImg} className="w-10 h-10 mr-2" />
              <span className="title-font font-medium">
                Cuando vendes o compras monedas, solo selecciona la moneda que
                quieres comprar o vender.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-green-100 cursor-pointer hover:shadow-green-700 hover:shadow-2xl">
              <img src={InfoIMG} className="w-10 h-10 mr-2" />
              <span className="title-font font-medium">
                Una vez seleccionada te mostrara la informacion correspondiente
                a la moneda para su respectivo movimiento.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-green-100 cursor-pointer hover:shadow-green-700 hover:shadow-2xl">
              <img src={cambiarImg} className="w-10 h-10 mr-2" />
              <span className="title-font font-medium">
                En caso de cambiar tu moneda selecciona la moneda de partida y
                tambien la moneda final a cambiar.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-green-100 cursor-pointer hover:shadow-green-700 hover:shadow-2xl">
              <img src={InfoMonedaImge} className="w-10 h-10 mr-2" />
              <span className="title-font font-medium">
                Al final te mostrara el cambio como se haria y en cuanto costo
                tendria cada cambio.
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-green-100 cursor-pointer hover:shadow-green-700 hover:shadow-2xl">
              <img src={IntentaloImg} className="w-10 h-10 mr-2" />
              <span className="title-font font-medium">Intentalo!!!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-4 mx-auto">
        <div className="w-full lg:w-2/6 text-center mx-auto">
          <span className="text-green-700 font-semibold text-2xl">
            Que quieres Hacer?
          </span>
          <select
            className="w-full mt-1 rounded-xl cursor-pointer shadow-md border-green-500 active:border-green-900 focus:border-green-900  selection:border-green-900 text-green-700 font-semibold text-xl"
            placeholder="Seleccione"
            value={change}
            onChange={(e) => setSelectChange(e.target.value)}
          >
            <option
              className="text-green-700 font-semibold text-xl cursor-pointer my-2"
              value=""
            >
              Seleccione
            </option>
            <option
              className="text-green-700 font-semibold text-xl cursor-pointer my-2"
              value={0}
            >
              Cambiar Monedas
            </option>
            <option
              className="text-green-700 font-semibold text-xl cursor-pointer my-2"
              value={1}
            >
              Comprar Monedas
            </option>
            <option
              className="text-green-700 font-semibold text-xl cursor-pointer my-2"
              value={2}
            >
              Vender Monedas
            </option>
          </select>
        </div>
      </div>
      {parseInt(change) === 0 && <Cambio/>}
      {parseInt(change) === 1 && <Comprar pasaObjetos={['Comprar Monedas', 'Elige tu moneda a Comprar', imagenComprar]} />}
      {parseInt(change) === 2 && <Comprar pasaObjetos={['Vender Monedas', 'Elige tu moneda a Vender', imagenVender]} />}
    </section>
  );
};

export default InforCambiaMoneda;
