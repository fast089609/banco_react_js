import React, { useEffect } from 'react'

const Dash = ({setSeccionTitle}) => {
    useEffect(() => {
        setSeccionTitle('Dashboard');
    });

  return (
    <div>Dash</div>
  )
}

export default Dash