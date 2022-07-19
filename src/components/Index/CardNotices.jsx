import React from "react";

const CardNotices = ({noticia}) => {
  return (
    <div className="rounded-lg shadow-lg shadow-gray-600 bg-white max-w-sm my-9 h-full">
      <a
        href={noticia.url}
        target="_blank"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img className="rounded-t-lg" src={noticia.imagen} alt="" />
      </a>
      <div className="p-6 text-center">
        <h5 className="text-gray-900 text-xl font-bold mb-2">
          {noticia.titulo}
        </h5>
        <p className="text-gray-700 text-base mb-4">{noticia.descripcion}</p>
        <a
          href={noticia.url}
          target="_blank"
          className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight capitalize rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          leer mas
        </a>
      </div>
    </div>
  );
};

export default CardNotices;
