import React, { useState } from "react";

const Register = ({cambiarLogin}) => {
    
    const [fecha_nacimiento_text, setFechaNacimientoType] = useState('text');

  return (
    <form>
        <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Nombre"
        />
      </div>

      <div className="mb-6">
        <input
          type={fecha_nacimiento_text}
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Fecha Nacimiento" 
          onFocus={() => {
            setFechaNacimientoType('date')
          }}
        />
      </div>

      <div className="mb-6">
        <input
          type="number"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Celular"
        />
      </div>

      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Email address"
        />
      </div>

      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Contrasena"
        />
      </div>



      <div className="text-center lg:text-left">
        <button
          type="button"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Registrate
        </button>
        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
          Tienes una cuenta?
          <a
            onClick={cambiarLogin}
            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-3"
          >
            Entrar
          </a>
        </p>
      </div>
    </form>
  );
};

export default Register;
