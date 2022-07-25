import React from "react";
import fotofabian from "./../../images/foto_fabian.jpg";
import fotojulian from "./../../images/foto_julian.jpg";
import fotoyuliana from "./../../images/foto_yuliana.jpg";

const Team = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <h1 className="xl:text-4xl text-3xl text-center text-green-800 dark:text-white font-extrabold pb-6">
            Nuestro Equipo
          </h1>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center flex-wrap md:justify-around sm:justify-around lg:justify-around justify-center"
          >
            <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={fotofabian}
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-2xl"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
                    Fabian Castro
                  </h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    Ingeniero de software
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    El trabajo del Ingeniero de Software consiste en analizar,
                    diseñar, programar, probar y mantener sistemas informáticos
                    y de software con el propósito de resolver problemas para
                    los usuarios.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/Fast08960"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={fotojulian}
                      alt="Display Picture of Andres Berlin"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-2xl"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
                    Julián Pastrana
                  </h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    Ingeniero de Software
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    Soy Julián y tengo 23 años, soy integrante del equipo de desarrollo del proyecto,
                    llevo 5 semestres en la carrera y soy un amante empedernido de la salchipapa y las pandeyucas.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="https://github.com/Darkpoker20"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/julian_pastrana_uwu/"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Instagram" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={fotoyuliana}
                      alt="Display Picture of Andres Berlin"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-2xl"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
                    Yuliana Bahamon
                  </h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    Ingeniera de Software
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                  ¿Qué es lo que hace un ingeniero de software?
                  Los ingenieros de software programan y diseñan aplicaciones de software. Parte de su responsabilidad incluye 
                  trabajar con un equipo de analistas de control de calidad, amo el aguacate.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div aria-label="Instagram" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                      alt="Display Picture of Andres Berlin"
                      role="img"
                      className="rounded-full object-cover h-full w-full shadow-2xl"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
                    Andres Berlin
                  </h1>
                  <p className="text-gray-800 dark:text-white text-sm text-center">
                    Chief Executive Officer
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    The CEO's role in raising a company's corporate IQ is to
                    establish an atmosphere that promotes knowledge sharing and
                    collaboration.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a
                      href="javascript:void(0)"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Github" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                          alt="github"
                        />
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Twitter" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                          alt="twitter"
                        />
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="mx-5"
                      target="_blank"
                    >
                      <div aria-label="Instagram" role="img">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
