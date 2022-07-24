import React, { useState } from "react";

const Selector = (label, opciones) => {
  const [state, setState] = useState("");
  const selector = () => (
    <div>
      <span className="text-black text-2xl">{label}</span>
      <select
        className="w-full mt-1 rounded-xl cursor-pointer shadow-md border-green-500 active:border-green-900 focus:border-green-900  selection:border-green-900 text-green-700 font-semibold text-xl"
        placeholder="Seleccione"
        value={state}
        onChange={(e) => {setState(e.target.value)}}
      >
        <option value="" className="text-green-700 font-semibold text-xl cursor-pointer my-2">Seleccione</option>
        {opciones.map((opcion) => (
          <option
            key={opcion.id}
            value={opcion.id}
            className="text-green-700 font-semibold text-xl cursor-pointer my-2"
          >
            {opcion.nombre}
          </option>
        ))}
      </select>
    </div>
  );

  return [state, selector];
};

export default Selector;
