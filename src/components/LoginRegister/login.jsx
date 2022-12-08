import axios from "axios";
import React, { useState } from "react";

const Login = ({cambiarRegister}) => {

  const [datos, setDatos] = useState({
    'email': '',
    'password': '',
  });

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
      const url = `http://localhost:8000/api/usuarios/login`;
      axios.post(url, datos)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <form onSubmit={hanndleSubmit}>
      <div className="mb-6">
        <input
          type="email"
          name="email"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Email address"
          onChange={handleInputChange}
          value={datos.email}
          required
        />
      </div>

      <div className="mb-6">
        <input
          type="password"
          name="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Password"
          onChange={handleInputChange}
          value={datos.password}
          required
        />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck2"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="exampleCheck2"
          >
            Recordarme
          </label>
        </div>
        <a href="#!" className="text-gray-800">
          Olvidaste la contrasena?
        </a>
      </div>

      <div className="text-center lg:text-left">
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Entrar
        </button>
        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
          No tienes una cuenta?
          <a
            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-3 cursor-pointer"
            onClick={cambiarRegister}
          >
            Registrate
          </a>
        </p>
      </div>
    </form>
  );
};

export default Login;
