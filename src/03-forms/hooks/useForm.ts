import { ChangeEvent, useState } from "react";


const useForm = <T>(initData : T) => {
 
    const [ formData, setFormData ] = useState(initData);

   

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setFormData( prev => ({
            ...prev,
            [ e.target.name ] : e.target.value
        }) )
    }

    const reset = ()=>{
        setFormData({...initData})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return{
        ...formData,

        formData,
        reset,
        isValidEmail,
        onChange
    }
}

export default useForm
