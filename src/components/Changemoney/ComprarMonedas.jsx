import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import cambioImg from "./../../images/venta-al-por-mayor.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import helpAxios from "../utils/helpAxios";
import captureHelpAxiosAuth from "../utils/captureHelpAxiosAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ComprarMonedas = ({pasaObjetos}) => {
  const [botonText, labelSelect, imagen] = pasaObjetos;
  const [monedas, setMonedas] = useState([]);

  const navigate = useNavigate();

  const consultarApi = async () => {
    helpAxios(true).get('/api/monedas/obtenerMonedasComprar')
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
    'monto': 0
  });

  useEffect(() => {
    consultarApi();
  }, []);

  const handleInputChange = (e) => {
    let {name, value} = e.target;
    if(name == 'moneda_id'){
        monedas.forEach(moneda => {
            if(moneda._id == value){
                setMaximaCantidad(moneda.cantidad);
            }
        });
    }
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos);
  };

  const [maxima_cantidad, setMaximaCantidad] = useState(0);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
        console.log("no validado");
    }else{
        helpAxios(true).post('/api/monedas/comprarMonedas', datos)
        .then(function (response) {
            Swal.fire( 
            'Compra Exitosa',
            'Moneda comprada correctamente',
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
    <form onSubmit={handleSubmit}>
      <div className="grid w-5/6 grid-cols-2 gap-10 mx-auto mt-10">
        <div className="">
            <span className="text-black text-2xl">Elige la moneda a vender</span>
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
                    key={moneda._id}
                    value={moneda._id}
                    className="text-green-700 font-semibold text-xl cursor-pointer my-2"
                >
                  {moneda.nombre_corto} - {moneda.nombre}
                </option>
                ))}
            </select>
        </div>
        <div>
            <span className="text-black text-2xl">Cantidad para comprar</span>
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
      </div>
      <div className="w-full text-center mt-10">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {botonText}
        </button>
      </div>
    </form>
  );
};

export default ComprarMonedas;
