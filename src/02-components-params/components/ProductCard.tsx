import { createContext,  CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';




export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext


export interface ProductProps {
  product: Product;
  
  children: ( args: ProductCardHandlers )=>JSX.Element;
  className?:string
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs )=>void;
  value?:number;
  initialValues? : InitialValues;
  maxCount?:number
}



export const ProductCard = ({ children, product, className, style, onChange,value, initialValues }: ProductProps) => {
  const { counter, increaseBy, maxCount, isMountCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount
    }}>

        <div  
            className={`${styles.productCard} ${ className }`} 
            style={style}>
           {
              children({
                count: counter,
                isMountCountReached,
                maxCount: initialValues?.count,
                product,
                increaseBy,
                reset

              })
           }

     
        </div>
    </Provider>
  );
};

export default ProductCard;

/* ProductCard.Img = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons; */
