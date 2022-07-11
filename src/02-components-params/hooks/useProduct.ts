import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductsArgs{
    product: Product;
    onChange?: ( args:onChangeArgs )=>void;
    value?:number
}


export const useProduct = ( { product,onChange, value = 0 }:useProductsArgs )=>{

    const [ counter, setCounter ] = useState(value)
   
    const isControlled = useRef(!!onChange); /* Evaluamos si el onChange es true */

    const increaseBy = (value:number)=>{

       /*  console.log("isControlled", isControlled.current) */
       if(isControlled.current){
            return onChange!({ count:value,product })
       }

        const newValue = Math.max( counter +  value , 0 ) 

        setCounter( newValue )

        onChange && onChange({ count: newValue, product })

    }

    useEffect(()=>{
        setCounter( value )
    },[value])

    return{
        counter, increaseBy
    }
}