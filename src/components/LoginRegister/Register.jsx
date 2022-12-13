import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import helpAxios from "../utils/helpAxios";
import { validateRol } from "../utils/Utils";

const Register = ({cambiarLogin}) => {
    
    const [fecha_nacimiento_text, setFechaNacimientoType] = useState('text');

    const navigate = useNavigate();

    const [datos, setDatos] = useState({
      'nombre': '',
      'email': '',
      'telefono': '',
      'password': '',
      'fecha_nacimiento': ''
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
        helpAxios(false).post('/api/usuarios', datos)
          .then(function (response) {
            localStorage.setItem("auth", JSON.stringify(response.data));
            if(validateRol("administrador")){
              navigate('/dash');
            }else{
              navigate('/');
            }
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
    <form onSubmit={hanndleSubmit}>
        <div className={"mb-3 text-red-600 " + (error == '' ? '' : 'd-none')}>
          {error}
        </div>
        <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Nombre"
          onChange={handleInputChange}
          value={datos.nombre}
          name="nombre"
          required
          min={3}
        />
      </div>

      <div className="mb-6">
        <input
          type={fecha_nacimiento_text}
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Fecha Nacimiento" 
          onFocus={() => {
            setFechaNacimientoType('date')
          }}
          name="fecha_nacimiento"
          onChange={handleInputChange}
          value={datos.fecha_nacimiento}
          required
        />
      </div>

      <div className="mb-6">
        <input
          type="number"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Celular"
          name="telefono"
          onChange={handleInputChange}
          value={datos.telefono}
          required
          minLength={7}
          maxLength={10}
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
          name="email"
          onChange={handleInputChange}
          value={datos.email}
          required
        />
      </div>

      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Contrasena"
          name="password"
          onChange={handleInputChange}
          value={datos.password}
          required
          minLength={3}
        />
      </div>



      <div className="text-center lg:text-left">
        <button
          type="submit"
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
