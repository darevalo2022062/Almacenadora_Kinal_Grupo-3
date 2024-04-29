import { useState } from "react";

import { register as registerRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegister = () => {
    const [isLoading, setIsLoading]=useState()

    const register =async(firstName,lastName,userName,password)=>{
        setIsLoading(true);
        const response = await registerRequest({firstName,lastName,userName,password});
        setIsLoading(false);
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error en el registro'
            );
        }
        return toast.success('Se ha registrado con exito')
    }

    return {
        isLoading,
        register
    }
}
