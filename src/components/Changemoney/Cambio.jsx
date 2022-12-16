import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import cambioImg from "./../../images/tipo-de-cambio.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import helpAxios from "../utils/helpAxios";
import captureHelpAxiosAuth from "../utils/captureHelpAxiosAuth";

const Cambio = () => {
  const [monedas, setMonedas] = useState([]);
  const [cambioMonedas, setCambioMonedas] = useState([]);
  const [cantidadiCambiar, setCantidadCambiar] = useState(0);

  const navigate = useNavigate();

  const consultarApi = async () => {
    helpAxios(true).get('/api/monedas/obtenerMonedasComprar')
    .then(function ({data}) {
      setCambioMonedas(data);
    })
    .catch(function (error) {
      captureHelpAxiosAuth(error);
      if(error.response.status == 400){
          setError(error.response.data.msg);
      }
    });

    helpAxios(true).get('/api/billeteras/obtenerBilleteras/')
    .then(function ({data}) {
      setMonedas(data);
    })
    .catch(function (error) {
      captureHelpAxiosAuth(error);
      if(error.response.status == 400){
          setError(error.response.data.msg);
      }
    });
  };


  const [datos, setDatos] = useState({
    'moneda_id': '',
    'monto': 0,
    'moneda_destino': ''
  });

  useEffect(() => {
    consultarApi();
  }, []);

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    if(name == 'moneda_id'){
        monedas.forEach(moneda => {
          if(moneda.moneda_id._id == value){
            setMaximaCantidad(moneda.monto);
            setNombreCorto(moneda.moneda_id.nombre_corto);
        }
        });
    }
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos);
  };

  const [maxima_cantidad, setMaximaCantidad] = useState(0);
  const [nombre_corto_seleccionado, setNombreCorto] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
        console.log("no validado");
    }else{
        helpAxios(true).post('/api/monedas/cambiarMonedas', datos)
        .then(function (response) {
            Swal.fire( 
            'Cambio Exitoso',
            'Moneda cambiada correctamente',
            'success')
            .then((respuesta) =>{
            navigate('/billeteras');
            });
        })
        .catch(function (error) {
            console.log(error);
            if(error.response.data.msg != undefined){
                setError(error.response.data.msg);
            }
        });
    }
  }

  return (
    <form className="" onSubmit={handleSubmit}>
        <div className={"w-full text-center " + ((monedas.length == 0) ? '' : 'hidden')}>
            <h1 className="text-3xl text-red-700 font-bold">No tiene monedas para vender</h1>
        </div>
      <div className={"flex w-5/6 grid-cols-3 gap-10 mx-auto mt-10 " + ((monedas.length == 0) ? 'hidden' : '')}>
          <div className="">
              <span className="text-black text-2xl">Elige la moneda a cambiar</span>
              <select
                  className="w-full mt-1 rounded-xl cursor-pointer shadow-md border-green-500 active:border-green-900 focus:border-green-900  selection:border-green-900 text-green-700 font-semibold text-xl"
                  placeholder="Seleccione"
                  value={datos.moneda_id || ''}
                  onChange={handleInputChange}
                  required
                  name="moneda_id"
              >
                  <option value="" className="text-green-700 font-semibold text-xl cursor-pointer my-2">Seleccione</option>
                  {monedas.map((moneda) => (
                  <option
                      key={moneda.moneda_id._id}
                      value={moneda.moneda_id._id}
                      className="text-green-700 font-semibold text-xl cursor-pointer my-2"
                  >
                    {moneda.moneda_id.nombre_corto} - {moneda.moneda_id.nombre}
                  </option>
                  ))}
              </select>
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
                name="monto"
                className="py-2 text-green-700 pl-10 focus:text-green-900 font-semibold text-center w-full mt-1 rounded-xl cursor-pointer shadow-md border-green-500 active:border-green-900 focus:border-green-900  selection:border-green-900 text-xl"
                placeholder="Dinero"
                onChange={handleInputChange}
                value={datos.monto || 0}
                max={maxima_cantidad}
                min="1"
                required
            />
          </div>
        </div>
        <div className="">
            <span className="text-black text-2xl">Elige la moneda de cambio</span>
            <select
                className="w-full mt-1 rounded-xl cursor-pointer shadow-md border-green-500 active:border-green-900 focus:border-green-900  selection:border-green-900 text-green-700 font-semibold text-xl"
                placeholder="Seleccione"
                value={datos.moneda_destino || ''}
                onChange={handleInputChange}
                required
                name="moneda_destino"
            >
                <option value="" className="text-green-700 font-semibold text-xl cursor-pointer my-2">Seleccione</option>
                {cambioMonedas.map((moneda) => (
                <option
                    key={moneda._id}
                    value={moneda._id}
                    className="text-green-700 font-semibold text-xl cursor-pointer my-2"
                >
                  {moneda.nombre_corto} - {moneda.nombre}
                </option>
                ))}
            </select>
        </div>
      </div>
      <div className={"w-full " + ((monedas.length == 0) ? 'hidden' : '')}>
          <div className={"w-full mb-4 mt-3" + (nombre_corto_seleccionado != '' ? '' : 'hidden')}>
            <h1 className="text-green-800 text-center text-bold text-3xl">Tienes {maxima_cantidad} {nombre_corto_seleccionado}</h1>
          </div>
          <div className="w-full text-center mt-10">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Cambiar Monedas
            </button>
          </div>
        </div>
    </form>
  );
};

export default Cambio;
