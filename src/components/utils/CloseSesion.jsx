import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const CloseSesion = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('auth');
        navigate('/');
    });
  return (
    <div></div>
  )
}

export default CloseSesion