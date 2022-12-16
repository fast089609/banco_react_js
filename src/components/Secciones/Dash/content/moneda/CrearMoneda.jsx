import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import helpAxios from '../../../../utils/helpAxios';

const CrearMoneda = ({setSeccionTitle}) => {

    useEffect(() => {
        setSeccionTitle('Crear Monedas');
        document.title = `Banco Pide Ya - Crear Moneda`;
    }, []);
    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        'nombre': '',
        'nombre_corto': '',
        'cantidad': '',
        'estado': 1
      });
      const [error, setError] = useState("");

      const handleInputChange = (e) => {
        let {name, value} = e.target;
        let newDatos = {...datos, [name]: value};
        setDatos(newDatos);
      };

      const hanndleSubmit = async(e) => {
        e.preventDefault();
        if(!e.target.checkValidity()){
          console.log("no validado");
        }else{
  
          helpAxios(true).post('/api/monedas/crearMoneda', datos)
            .then(function (response) {
              console.log(response);
              Swal.fire( 
                  'Creacion Exitosa',
                  'Creacion de moneda correctamente',
                  'success')
                .then((respuesta) =>{
                  navigate('/dash/moneys');
                });
              })
            .catch(function (error) {
              console.log(error);
              if(error.response.data.msg != undefined){
                setError(error.response.data.msg);
              }
            });
        }
      };



  return (
    <div className='w-full'>
        <div className='w-3/6 mx-auto'>
            <div className={"mb-3 text-red-600 " + (error == '' ? '' : 'd-none')}>
                {error}
            </div>
            <h1 className='text-center font-bold text-green-600 text-2xl'>Crear Moneda</h1>
            <form onSubmit={hanndleSubmit} className='mt-4' autoComplete={"off"}>
                <div className="mb-6">
                    <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    value={datos.nombre || ''}
                    name="nombre"
                    required
                    min={3}
                    />
                </div>
                <div className="mb-6">
                    <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nombre corto"
                    onChange={handleInputChange}
                    value={datos.nombre_corto || ''}
                    name="nombre_corto"
                    required
                    />
                </div>

                <div className="mb-6">
                    <input
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Cantidad"
                    onChange={handleInputChange}
                    value={datos.cantidad || ''}
                    name="cantidad"
                    required
                    />
                </div>

            <div className="mb-6">
            <select
                id="selector_multiple"
                name="estado"
                placeholder="Select roles..."
                autoComplete="off"
                className="block w-full rounded-sm cursor-pointer focus:outline-none"
                onChange={handleInputChange}
                value={datos.estado || []}
                required
            >
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>
            </select>
            </div>

            <div className="text-center">
                <button
                type="submit"
                className="inline-block px-7 py-3 bg-green-600 text-white text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
                >
                Crear Moneda
                </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CrearMoneda