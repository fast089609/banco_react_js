import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import cambioImg from "./../../images/venta-al-por-mayor.png";

const Comprar = ({pasaObjetos}) => {
  const [botonText, labelSelect, imagen] = pasaObjetos;
  const [monedas, setMonedas] = useState([]);
  const [cambioMonedas, setCambioMonedas] = useState(null);

  const [status_moneda, SelectMonedas] = Selector(
    labelSelect,
    monedas
  );

  const DarResultadosMonedas = () => {
    if (status_moneda != "") {
      CambiarApi();
    } else {
      setCambioMonedas(null);
    }
  };

  const consultarApi = async () => {
    const url =
      "https://api.fastforex.io/currencies?api_key=2626194042-c3fed002a7-rfht2r";
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
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

  const CambiarApi = async () => {
    const url = `https://api.fastforex.io/convert?from=${status_moneda}&to=COP&amount=1&api_key=2626194042-c3fed002a7-rfht2r`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
    setCambioMonedas(resultado);
  };

  useEffect(() => {
    DarResultadosMonedas();
  }, [status_moneda]);

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div>
      <div className="grid w-5/6 grid-cols-2 gap-10 mx-auto mt-10">
        <div className="">
          <SelectMonedas />
        </div>
      </div>
      {cambioMonedas != null && (
        <div className="w-5/6 grid-cols-3 gap-10 mx-auto mt-10 grid ">
          <div className="text-center self-center rounded-md shadow-md shadow-purple-600 cursor-pointer hover:bg-purple-50">
            <h1 className="text-7xl text-pink-600 font-semibold">
              {status_moneda}
            </h1>
            <h1 className="text-7xl text-green-600 font-semibold">1</h1>
          </div>
          <div className="text-center self-center ">
            <img src={imagen} className="w-56 mx-auto" />
          </div>
          <div className="text-center self-center rounded-md shadow-md shadow-purple-600 cursor-pointer hover:bg-purple-50">
            <h1 className="text-7xl text-pink-600 font-semibold">COP</h1>
            <h1 className="text-7xl text-green-600 font-semibold">
              {cambioMonedas.result["COP"]}
            </h1>
          </div>
        </div>
      )}
      <div className="w-full text-center mt-10">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="button"
        >
          {botonText}
        </button>
      </div>
    </div>
  );
};

export default Comprar;
