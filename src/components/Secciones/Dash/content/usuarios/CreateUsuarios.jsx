import React from 'react'
import { useEffect } from 'react';

const CreateUsuarios = ({setSeccionTitle}) => {

    useEffect(() => {
        setSeccionTitle('Crear Usuarios');
        document.title = `Banco Pide Ya - Crear Usuarios`;
    }, []);


  return (
    <div>CreateUsuarios</div>
  )
}

export default CreateUsuarios