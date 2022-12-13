import { useNavigate } from "react-router-dom";

const captureHelpAxiosAuth = (error) =>{
    const navigate = useNavigate();

    if(error.response.status == 401){
        navigate('/loginRegister');
    }else if(error.response.status == 403){
        navigate('/acceso_no_autorizado');
    }
}

export default captureHelpAxiosAuth