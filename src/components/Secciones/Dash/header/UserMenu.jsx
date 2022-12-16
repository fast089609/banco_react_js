import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../../utils/Transition';

import { faBuilding, faClose, faCog, faCogs, faDoorClosed, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { validateRol } from '../../../utils/Utils';

function UserMenu() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  var info_user = {};

  if(localStorage.getItem('auth')){
    info_user = JSON.parse(localStorage.getItem('auth'));
  }
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-8 h-8 rounded-full" src={info_user.avatar != undefined ? (window.URL_API_BACKEND + "storage/img_users/" + info_user.avatar) : '/src/images/avatar.png'} width="32" height="32" alt="User" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-semibold group-hover:text-slate-800">{info_user.nombre}</span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="text-slate-800 font-semibold">{info_user.nombre}</div>
            <div className="text-xs text-slate-500 italic">Administrador</div>
          </div>
          <ul>
          <li className={validateRol("administrador") ? '' : 'hidden'}>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 hover:bg-green-100 cursor-pointer"
                to="/dash"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FontAwesomeIcon icon={faBuilding} className="mr-3" /> Dash
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 hover:bg-green-100 cursor-pointer"
                to="/configuracion"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FontAwesomeIcon icon={faCog} className="mr-3" /> Configuracion
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 hover:bg-green-100 cursor-pointer"
                to="/billeteras"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FontAwesomeIcon icon={faWallet} className="mr-3" /> Billeteras
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3 hover:bg-green-100 cursor-pointer"
                to="/closeSession"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FontAwesomeIcon icon={faDoorClosed} className="mr-3" /> Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default UserMenu;