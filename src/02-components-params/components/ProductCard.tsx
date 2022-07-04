import { createContext, ReactElement } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps  } from "../interfaces/interfaces";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?:string
}



export const ProductCard = ({ children, product, className }: ProductProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product

    }}>

        <div className={`${styles.productCard} ${ className }`}>
        {children}

     
        </div>
    </Provider>
  );
};

export default ProductCard;

/* ProductCard.Img = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
