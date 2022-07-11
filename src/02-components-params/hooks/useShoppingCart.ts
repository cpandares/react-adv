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
           
    
          if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
    
            return rest;
          }
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };
        }); 
    
    
        
    
    };

    return{
        onProductChange, shoppingCart
    }
};

export default useShoppingCart;