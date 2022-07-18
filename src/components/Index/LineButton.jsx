import React from "react";

const LineButton = () => {
  return (
    <div
      class="bg-green-300 py-5 px-6 mb-4 text-base text-blue-700 mb-3 text-right shadow-green-500 shadow-lg"
      role="alert"
    >
      <button type="button" class="inline-block px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:bg-green-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out">Cambia tu moneda</button>
    </div>
  );
};

export default LineButton;
