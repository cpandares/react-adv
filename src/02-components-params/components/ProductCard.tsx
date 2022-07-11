import { createContext, ReactElement, CSSProperties } from 'react';
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { onChangeArgs, Product, ProductContextProps  } from "../interfaces/interfaces";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?:string
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs )=>void;
  value?:number
}



export const ProductCard = ({ children, product, className, style, onChange,value }: ProductProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
      
    }}>

        <div  
            className={`${styles.productCard} ${ className }`} 
            style={style}>
        {children}

     
        </div>
    </Provider>
  );
};

export default ProductCard;

/* ProductCard.Img = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
