import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import captureHelpAxiosAuth from '../utils/captureHelpAxiosAuth'
import helpAxios from '../utils/helpAxios'

const Billeteras = () => {
    useEffect(() => {
        document.title = `Banco Pide Ya - Billeteras`;
        obtenerBilleteras();
    }, []);

    const [billeteras, setBilleteras] = useState([]);

    const obtenerBilleteras = async() => {
        helpAxios(true).get('/api/billeteras/obtenerBilleteras/')
          .then(function ({data}) {
            setBilleteras(data)
          })
          .catch(function (error) {
            captureHelpAxiosAuth(error);
            if(error.response.status == 400){
                setError(error.response.data.msg);
            }
          });
    }

  return (
    <div>
        <Navbar />
        <div className='pt-20 w-full'>
            <div className='w-3/6 mx-auto'>
                <div className="p-4 max-w bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-4 text-center">
                        <h3 className="text-3xl font-bold leading-none text-green-900 dark:text-white text-center">Mis Billeteras <FontAwesomeIcon icon={faWallet} className="mñ-3" /></h3>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {
                                billeteras.map((billetera, index) => {
                                    return (
                                        <li className="py-3 sm:py-4 bg-green-200 rounded-xl px-6 hover:bg-blue-200 cursor-pointer mt-3" key={index}>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xl font-bold text-gray-900 truncate dark:text-white">
                                                        {billetera.moneda_id.nombre_corto}
                                                    </p>
                                                    <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                                        {billetera.moneda_id.nombre}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    ${billetera.monto}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Billeteras