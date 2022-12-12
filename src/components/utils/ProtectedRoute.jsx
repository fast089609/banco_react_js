import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validateAuth, validateRol } from "./Utils";

export const ProtectedRoute = ({ children, roles=null }) => {

    const navigate = useNavigate();
    
    useEffect(() => {
        if(!validateAuth()){
            navigate('/loginRegister');
        }else{
            if(roles != null){
                roles.forEach(rol => {
                    if(!validateRol(rol)){
                        navigate('/acceso_no_autorizado');
                    } 
                });
            }
        }
    });

  return children;
};