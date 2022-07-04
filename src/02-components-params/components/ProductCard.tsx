import { createContext, ReactElement, useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, ProductProps } from "../interfaces/interfaces";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext



export const ProductCard = ({ children, product }: ProductProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product

    }}>

        <div className={styles.productCard}>
        {children}

     
        </div>
    </Provider>
  );
};

export default ProductCard;

/* ProductCard.Img = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
