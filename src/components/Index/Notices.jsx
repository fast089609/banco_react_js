import React from "react";

const Notices = () => {
  return (
    <div className="w-full">
          <div className="w-full mt-14">
        <h1 className="text-center text-green-400 text-3xl font-bold">Lo ultimo en noticias ...</h1>
      </div>
    <div className="w-full px-5 lg:mx-auto lg:w-3/4">
    <div className="grid grid-cols-1 gap-14 mt-5 md:grid-cols-3 xl:grid-cols-3">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg shadow-gray-600 bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </a>
            <div class="p-6 text-center">
              <h5 class="text-gray-900 text-xl font-bold mb-2">Notica 1</h5>
              <p class="text-gray-700 text-base mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight capitalize rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                leer mas
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg shadow-gray-600 bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </a>
            <div class="p-6 text-center">
              <h5 class="text-gray-900 text-xl font-bold mb-2">Notica 2</h5>
              <p class="text-gray-700 text-base mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight capitalize rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                leer mas
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg shadow-gray-600 bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </a>
            <div class="p-6 text-center">
              <h5 class="text-gray-900 text-xl font-bold mb-2">Notica 3</h5>
              <p class="text-gray-700 text-base mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight capitalize rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                leer mas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Notices;
