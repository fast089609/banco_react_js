import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const helpAxios = (token) => {
    
    axios.defaults.baseURL = 'http://localhost:8000/'
    if(token){
        axios.defaults.headers.common = {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth')).token}`}
    }
    return axios;
}




export default helpAxios