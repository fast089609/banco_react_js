import React, { useEffect } from 'react'

const Dash = ({setSeccionTitle}) => {
    useEffect(() => {
        setSeccionTitle('Dashboard');
    });

  return (
    <div className='w-full h-full'>
      <img src='/src/images/bienvenidos.jpg' className='w-3/6 m-auto'/>
    </div>
  )
}

export default Dash