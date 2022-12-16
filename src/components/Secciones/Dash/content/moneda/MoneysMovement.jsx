import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import helpAxios from '../../../../utils/helpAxios';

const MoneysMovement = ({setSeccionTitle}) => {
    useEffect(() => {
        setSeccionTitle('Movimientos de monedas');
        obtenerMovimientos()
    });

    const [movimientos, setMovimientos] = useState([]);

    const cambiarImagenAvatar = (e) => {
        e.target.src = "/src/images/avatar.png";
    }

    const obtenerMovimientos = async() => {
        helpAxios(true).get('/api/movimientos/obtenerMovimientos')
        .then(function ({data}) {
          data.forEach(movimiento => {
            if(movimiento.usuario.avatar != undefined){
              movimiento.usuario.avatar = window.URL_API_BACKEND + "storage/img_users/" + movimiento.usuario.avatar;
            }else{
              movimiento.usuario.avatar = "/src/images/avatar.png";
            }
        });
          setMovimientos(data);
        })
        .catch(function (error) {
          console.log(error);
          captureHelpAxiosAuth(error);
        });
      };
  return (
    <div className="min-h-screen  py-5">
        <div className='overflow-x-auto w-full'>
            <table className='mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead className="bg-gray-900">
                    <tr className="text-white text-center">
                        <th className="font-semibold text-sm uppercase px-6 py-4">Usuario </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">Moneda </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Movimiento </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Monto </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-400 bg-gray-200 text-center">
                    {movimientos.map((movimiento, index) => {
                        return (
                            <tr className='' key={index}>
                                <td className="px-3 py-2">
                                    <div className="flex items-center space-x-3 justify-center">
                                        <div className="inline-flex w-10 h-10"> <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' onError={cambiarImagenAvatar} src={movimiento.usuario.avatar} /> </div>
                                        <div>
                                            <p> {movimiento.usuario.nombre} </p>
                                            <p className="text-gray-500 text-sm font-semibold tracking-wide"> {movimiento.usuario.email} </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3 py-2">
                                    <p className="font-bold"> {movimiento.moneda.nombre} </p>
                                    <p className=""> {movimiento.moneda.nombre_corto} </p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className=""> {movimiento.movimiento} </p>
                                </td>
                                <td className="px-3 py-2">
                                  <p className=""> ${movimiento.monto} </p>
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

export default MoneysMovement