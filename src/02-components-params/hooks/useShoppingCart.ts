import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from '../data/products';


const useShoppingCart = () => {
    

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      const onProductChange = ({
        count,
        product,
      }: {
        count: number;
        product: Product;
      }) => {
        
      
        
        setShoppingCart((oldShoppingCart) => {
    
            const productIncart:ProductInCart = oldShoppingCart[product.id] || { ...product,count: 0 };
    
            if( Math.max( productIncart.count + count,0 )>0 ){
                productIncart.count +=count;
                return{
                    ...oldShoppingCart,
                    [product.id]: productIncart
                }
            }
    
            /* Borrar el producto */
    
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
    
            /* 
    
          if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
    
            return rest;
          }
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };
        }); */
    
    
        });   
    
    };

    return{
        onProductChange,products, shoppingCart
    }
};

export default useShoppingCart;