import React, { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Login from "../LoginRegister/login";
import LoginRegisterUnion from "../LoginRegister/LoginRegisterUnion";
import Register from "../LoginRegister/Register";

const LoginRegister = () => {
  useEffect(() => {
    document.title = `Banco Pide Ya - Ingresa / Registrate`;
  }, []);

  const [logueo, setLogueo] = useState('bg-green-600 text-white');
  const [register, setRegister] = useState('bg-green-300');
  const [type_logueo, setTypeLogueo] = useState(0);

  const cambiarRegister = () => {
    setLogueo('bg-green-300'); setRegister('bg-green-600 text-white'); setTypeLogueo(1)
  }

  const cambiarLogin = () => {
    setLogueo('bg-green-600 text-white'); setRegister('bg-green-300'); setTypeLogueo(0)
  }

  return (
    <div>
      <Navbar />

      <div className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="flex mb-5">
                <div className={'flex-auto text-center mx-5 py-1 cursor-pointer rounded-2xl ' + logueo} onClick={cambiarLogin}>
                  Entrar
                </div>
                <div className={'flex-auto text-center mx-5 py-1 cursor-pointer rounded-2xl ' + register} onClick={cambiarRegister}>
                  Registrar
                </div>
              </div>

              {type_logueo == 0 && <Login cambiarRegister={cambiarRegister}/>}
              {type_logueo == 1 && <Register cambiarLogin={cambiarLogin}/>}

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginRegister;
