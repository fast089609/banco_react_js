import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import cambioImg from "./../../images/tipo-de-cambio.png";

const Cambio = () => {
  const [monedas, setMonedas] = useState([]);
  const [cambioMonedas, setCambioMonedas] = useState(null);
  const [cantidadiCambiar, setCantidadCambiar] = useState(0);

  const [status_moneda, SelectMonedas] = Selector(
    "Elige tu moneda Inicial",
    monedas
  );
  const [status_monedas_cambio, SelectMonedasCambio] = Selector(
    "Elige tu moneda Destino",
    monedas
  );

  const DarResultadosMonedas = () => {
    if (
      status_moneda != "" &&
      status_monedas_cambio != "" &&
      cantidadiCambiar != "" &&
      cantidadiCambiar != 0
    ) {
      CambiarApi();
    } else {
      setCambioMonedas(null);
    }
  };

  const CambiarApi = async () => {
    const url = `https://api.fastforex.io/convert?from=${status_moneda}&to=${status_monedas_cambio}&amount=${cantidadiCambiar}&api_key=2626194042-c3fed002a7-rfht2r`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
    setCambioMonedas(resultado);
  };

  const consultarApi = async () => {
    const url =
      "https://api.fastforex.io/currencies?api_key=2626194042-c3fed002a7-rfht2r";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log("api");
    console.log(Object.keys(resultado.currencies));
    const array_monedas = [];
    Object.keys(resultado.currencies).forEach((simbolo) => {
      if (resultado.currencies[simbolo] != null) {
        const objeto = {
          id: simbolo,
          nombre: simbolo + " - " + resultado.currencies[simbolo],
        };
        array_monedas.push(objeto);
      }
    });

    setMonedas(array_monedas);
  };

  useEffect(() => {
    consultarApi();
  }, []);

  useEffect(() => {
    DarResultadosMonedas();
  }, [status_monedas_cambio, cantidadiCambiar, status_moneda]);

  return (
    <div className="">
      <div className="flex w-5/6 grid-cols-3 gap-10 mx-auto mt-10">
        <div className="">
          <SelectMonedas />
        </div>
        <div className="w-3/6">
          <span className="text-black text-2xl">Cantidad a cambiar</span>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline mt-1"
              >
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  className="text-green-700 font-semibold text-xl cursor-pointer my-2"
                />
              </button>
            </span>
            <input
              type="number"
              name="q"
              className="py-2 text-green-700 pl-10 focus:text-green-900 font-semibold text-center w-full mt-1 rounded-xl cursor-pointer shadow-md border-green-500 active:border-green-900 focus:border-green-900  selection:border-green-900 text-xl"
              placeholder="Dinero"
              onChange={(e) => {
                setCantidadCambiar(e.target.value);
              }}
              value={cantidadiCambiar}
            />
          </div>
        </div>
        <div className="">
          <SelectMonedasCambio />
        </div>
      </div>
      {cambioMonedas != null && (
        <div className={"w-full"}>
          <div className="w-3/5 grid-cols-3 gap-10 mx-auto mt-10 grid ">
            <div className="text-center self-center rounded-md shadow-md shadow-purple-600 cursor-pointer hover:bg-purple-50">
              <h1 className="text-7xl text-pink-600 font-semibold">
                {status_moneda}
              </h1>
              <h1 className="text-7xl text-green-600 font-semibold">
                {cantidadiCambiar}
              </h1>
            </div>
            <div className="text-center self-center ">
              <img src={cambioImg} className="w-56" />
            </div>
            <div className="text-center self-center rounded-md shadow-md shadow-purple-600 cursor-pointer hover:bg-purple-50">
              <h1 className="text-7xl text-pink-600 font-semibold">
                {status_monedas_cambio}
              </h1>
              <h1 className="text-7xl text-green-600 font-semibold">
                {cambioMonedas.result[status_monedas_cambio]}
              </h1>
            </div>
          </div>
          <div className="w-full text-center mt-10">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button">
              Cambiar Monedas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cambio;
