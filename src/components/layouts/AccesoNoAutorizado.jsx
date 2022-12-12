import React from 'react'
import { Link } from 'react-router-dom'
import imagen from './../../images/403.png'

const AccesoNoAutorizado = () => {
  return (
    <div className='w-full text-center h-full mx-auto'>
        <img src={imagen} className="mx-auto"/>
        <h1 className='text-red-500 font-bold text-4xl mb-3'>Acceso no permitido</h1>
        <Link
            to="/"
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            Volver al inicio
          </Link>
    </div>
  )
}

export default AccesoNoAutorizado