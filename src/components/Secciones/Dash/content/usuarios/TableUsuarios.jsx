import React, { useEffect, useState } from 'react'
import ajuste from './../../../../../images/ajuste.png';
import eliminar from './../../../../../images/eliminar.png';
import editar from './../../../../../images/editar.png';
import ver from './../../../../../images/ver.png';
import helpAxios from '../../../../utils/helpAxios';
import captureHelpAxiosAuth from '../../../../utils/captureHelpAxiosAuth';
import { formatDate } from '../../../../utils/Utils';
import Swal from 'sweetalert2';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableUsuarios = ({setSeccionTitle}) => {

    const [usuarios, setUsuarios] = useState([]);


    const obtenerUsuarios = async() => {
        helpAxios(true).get('/api/usuarios/obtenerUsuarios')
        .then(function ({data}) {
            data.forEach(user => {
                if(user.avatar != undefined){
                    user.avatar = window.URL_API_BACKEND + "storage/img_users/" + user.avatar;
                }else{
                    user.avatar = "/src/images/avatar.png";
                }
            });
            setUsuarios(data);
        })
        .catch(function (error) {
          console.log(error);
          captureHelpAxiosAuth(error);
        });
      };


      const eliminarUsuarios = async(id) => {
        Swal.fire({
            title: 'Seguro quieres eliminar este usuario?',
            showCancelButton: true,
            confirmButtonText: 'SI',
            cancelButtonText: `NO`,
            confirmButtonColor: '#970000',
            cancelButtonColor: '#00159b',
          }).then((result) => {
            if (result.isConfirmed) {
                helpAxios(true).delete('/api/usuarios/eliminarUsaurios', {
                    data: {
                        id: id
                    }
                })
                .then(function ({data}) {
        
                    const newUsers = usuarios.filter(usr => usr._id !== id);
        
                    setUsuarios(newUsers);
                })
                .catch(function (error) {
                  console.log(error);
                  captureHelpAxiosAuth(error);
                });  
            }
          })
      };


      useEffect(() => {
            setSeccionTitle('Usuarios');
            document.title = `Banco Pide Ya - Usuarios`;
            obtenerUsuarios();
        }, []);

  return (
    <div className="min-h-screen  py-5">
        <div className='overflow-x-auto w-full'>
            <div className='w-full text-right mb-4'>
                <Link
                    className="inline-block px-5 py-2 bg-indigo-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                    to="/dash/config/usuarios/create"
                >
                    <FontAwesomeIcon icon={faUser} className="mr-3"/> Crear
                </Link>
            </div>
            <table className='mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead className="bg-gray-900">
                    <tr className="text-white text-center">
                        <th className="font-semibold text-sm uppercase px-6 py-4">Usuario </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4">Telefono </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Fecha de nacimiento </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Roles </th>
                        <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Estado </th>
                        <th className="font-semibold text-sm uppercase"><img src={ajuste} className="w-8 mx-auto"/></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-400 bg-gray-200 text-center">
                    {usuarios.map((usuario, index) => {
                        return (
                            <tr className='' key={usuario._id}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3 justify-center">
                                        <div className="inline-flex w-10 h-10"> <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={usuario.avatar} /> </div>
                                        <div>
                                            <p> {usuario.nombre} </p>
                                            <p className="text-gray-500 text-sm font-semibold tracking-wide"> {usuario.email} </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <p className=""> {usuario.telefono} </p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className=""> {formatDate(usuario.fecha_nacimiento)} </p>
                                </td>
                                <td className="px-6 py-4">
                                    <div className=""> {
                                        usuario.roles.map((rol, index) => {
                                            return (
                                                <p key={index}>
                                                {rol.nombre}
                                                </p>
                                            );
                                        })
                                    } </div>
                                </td>
                                <td className="px-6 py-4 text-center"> <span className={"text-white text-sm w-1/3 pb-1 font-semibold px-2 rounded-full "  + (usuario.confirmado == true ? 'bg-green-700' : 'bg-red-500')}> {usuario.confirmado == true ? 'Activo' : 'Inactivo'} </span> </td>
                                <td className="text-center">
                                    <div className='flex justify-center'>
                                        <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                        <img src={eliminar} className="w-6 mx-2 cursor-pointer" onClick={() =>{eliminarUsuarios(usuario._id)}}/>
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

export default TableUsuarios