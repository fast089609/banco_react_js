import React, { useEffect } from 'react'

const MoneysMovement = ({setSeccionTitle}) => {
    useEffect(() => {
        setSeccionTitle('Movimientos de monedas');
    });
  return (
    <div>MoneysMovement</div>
  )
}

export default MoneysMovement