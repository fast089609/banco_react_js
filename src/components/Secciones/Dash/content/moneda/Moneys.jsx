import React, { useEffect } from 'react'
import ajuste from './../../../../../images/ajuste.png';
import eliminar from './../../../../../images/eliminar.png';
import editar from './../../../../../images/editar.png';
import ver from './../../../../../images/ver.png';

const Moneys = ({setSeccionTitle}) => {

    useEffect(() => {
        setSeccionTitle('Monedas');
    });

  return (
    <div class="min-h-screen  py-5">
        <div class='overflow-x-auto w-full'>
            <table class='mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                <thead class="bg-gray-900">
                    <tr class="text-white text-center">
                        <th class="font-semibold text-sm uppercase px-6 py-4">Moneda </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4">Codigo </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4 text-center">Estado </th>
                        <th class="font-semibold text-sm uppercase px-6 py-4 text-center">Precio </th>
                        <th class="font-semibold text-sm uppercase"><img src={ajuste} className="w-8 mx-auto"/></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-400 bg-gray-200 text-center">
                    <tr className=''>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3 justify-center">
                                <div class="inline-flex w-10 h-10"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                                <div>
                                    <p> Mira Rodeo </p>
                                    <p class="text-gray-500 text-sm font-semibold tracking-wide"> mirarodeo23@mail.com </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <p class=""> Software Developer </p>
                            <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p>
                        </td>
                        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td class="px-6 py-4 text-center"> Developer </td>
                        <td class="text-center">
                            <div className='flex justify-center'>
                                <img src={ver} className="w-6 mx-2 cursor-pointer"/>
                                <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                <img src={eliminar} className="w-6 mx-2 cursor-pointer"/>
                            </div>
                        </td>
                    </tr>
                    <tr className=''>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3 justify-center">
                                <div class="inline-flex w-10 h-10"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                                <div>
                                    <p> Mira Rodeo </p>
                                    <p class="text-gray-500 text-sm font-semibold tracking-wide"> mirarodeo23@mail.com </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <p class=""> Software Developer </p>
                            <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p>
                        </td>
                        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td class="px-6 py-4 text-center"> Developer </td>
                        <td class="text-center">
                            <div className='flex justify-center'>
                                <img src={ver} className="w-6 mx-2 cursor-pointer"/>
                                <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                <img src={eliminar} className="w-6 mx-2 cursor-pointer"/>
                            </div>
                        </td>
                    </tr>
                    <tr className=''>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3 justify-center">
                                <div class="inline-flex w-10 h-10"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                                <div>
                                    <p> Mira Rodeo </p>
                                    <p class="text-gray-500 text-sm font-semibold tracking-wide"> mirarodeo23@mail.com </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <p class=""> Software Developer </p>
                            <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p>
                        </td>
                        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td class="px-6 py-4 text-center"> Developer </td>
                        <td class="text-center">
                            <div className='flex justify-center'>
                                <img src={ver} className="w-6 mx-2 cursor-pointer"/>
                                <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                <img src={eliminar} className="w-6 mx-2 cursor-pointer"/>
                            </div>
                        </td>
                    </tr>
                    <tr className=''>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3 justify-center">
                                <div class="inline-flex w-10 h-10"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                                <div>
                                    <p> Mira Rodeo </p>
                                    <p class="text-gray-500 text-sm font-semibold tracking-wide"> mirarodeo23@mail.com </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <p class=""> Software Developer </p>
                            <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p>
                        </td>
                        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td class="px-6 py-4 text-center"> Developer </td>
                        <td class="text-center">
                            <div className='flex justify-center'>
                                <img src={ver} className="w-6 mx-2 cursor-pointer"/>
                                <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                <img src={eliminar} className="w-6 mx-2 cursor-pointer"/>
                            </div>
                        </td>
                    </tr>
                    <tr className=''>
                        <td class="px-6 py-4">
                            <div class="flex items-center space-x-3 justify-center">
                                <div class="inline-flex w-10 h-10"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                                <div>
                                    <p> Mira Rodeo </p>
                                    <p class="text-gray-500 text-sm font-semibold tracking-wide"> mirarodeo23@mail.com </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <p class=""> Software Developer </p>
                            <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p>
                        </td>
                        <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                        <td class="px-6 py-4 text-center"> Developer </td>
                        <td class="text-center">
                            <div className='flex justify-center'>
                                <img src={ver} className="w-6 mx-2 cursor-pointer"/>
                                <img src={editar} className="w-6 mx-2 cursor-pointer"/>
                                <img src={eliminar} className="w-6 mx-2 cursor-pointer"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Moneys