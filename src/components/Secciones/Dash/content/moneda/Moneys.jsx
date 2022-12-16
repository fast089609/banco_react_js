import React, { useEffect, useState } from 'react'
import ajuste from './../../../../../images/ajuste.png';
import eliminar from './../../../../../images/eliminar.png';
import editar from './../../../../../images/editar.png';
import ver from './../../../../../images/ver.png';
import { faCoins, faSackDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonero } from '@fortawesome/free-brands-svg-icons';
import helpAxios from '../../../../utils/helpAxios';
import captureHelpAxiosAuth from '../../../../utils/captureHelpAxiosAuth';
import Swal from 'sweetalert2';

const Moneys = ({setSeccionTitle}) => {

    useEffect(() => {
        document.title = `Banco Pide Ya - Monedas`;
        setSeccionTitle('Monedas');
        obtenerMonedas()
    }, []);

    const [monedas, setMonedas] = useState([]);

    const obtenerMonedas = async() => {
        helpAxios(true).get('/api/monedas/obtenerMonedas')
        .then(function ({data}) {
            setMonedas(data);
        })
        .catch(function (error) {
          console.log(error);
          captureHelpAxiosAuth(error);
        });
      };


      const eliminarMoneda = async(id) => {
        Swal.fire({
            title: 'Seguro quieres eliminar esta moneda?',
            showCancelButton: true,
            confirmButtonText: 'SI',
            cancelButtonText: `NO`,
            confirmButtonColor: '#970000',
            cancelButtonColor: '#00159b',
          }).then((result) => {
            if (result.isConfirmed) {
                helpAxios(true).delete('/api/monedas/eliminarMoneda', {
                    data: {
                        id: id
                    }
                })
                .then(function ({data}) {
        
                    const newMonedas = monedas.filter(usr => usr._id !== id);
        
                    setMonedas(newMonedas);
                })
                .catch(function (error) {
                  console.log(error);
                  captureHelpAxiosAuth(error);
                });  
            }
          })
      };

  return (
    <div className="min-h-screen  py-5">
        <div className='overflow-x-auto w-full'>
            <div className='w-full text-right mb-4'>
                <Link
                    className="inline-block px-5 py-2 bg-indigo-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                    to="/dash/moneys/create"
                >
                    <FontAwesomeIcon icon={faCoins} className="mr-3"/> Crear
                </Link>
            </div>
            <table className='mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead className="bg-gray-900">
                    <tr className="text-white text-center">
                        <th className="font-semibold text-sm uppercase px-6 py-4">Nombre </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">Nombre corto </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">Cantidad </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Estado </th>
                        <th className="font-semibold text-sm uppercase"><img src={ajuste} className="w-8 mx-auto"/></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-400 bg-gray-200 text-center">
                    {monedas.map((moneda, index) => {
                        return (
                            <tr className='' key={index}>
                                <td className="px-6 py-4">
                                    <p> {moneda.nombre} </p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className=""> {moneda.nombre_corto} </p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className=""> ${moneda.cantidad} </p>
                                </td>
                                <td className="px-6 py-4 text-center"> <span className={"text-white text-sm w-1/3 pb-1 font-semibold px-2 rounded-full "  + (moneda.estado == true ? 'bg-green-700' : 'bg-red-500')}> {moneda.estado == true ? 'Activo' : 'Inactivo'} </span> </td>
                                <td className="text-center">
                                    <div className='flex justify-center'>
                                        <Link
                                                to={"/dash/moneys/edit/"+moneda._id}
                                            >
                                        <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                        </Link>
                                        <img src={eliminar} className="w-6 mx-2 cursor-pointer" onClick={() =>{eliminarMoneda(moneda._id)}}/>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Moneys