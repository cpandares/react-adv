import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components/';


import '../styles/custom-styles.css';


import { products } from '../data/products';

const product = products[0];
export const ShoppingPage = () => {

  

  return (
    <div>
      <h2>Shopping Page</h2>
      <hr />
      
      
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark"
            initialValues = {{
                count:4,
                maxCount:10
            }}
          >
            {

              ({
                reset,
                count,
                increaseBy,
                isMountCountReached
              })=>(
                <>
                  <ProductImage
                    className="custom-image"
                    style={{
                      boxShadow: "10px 10px 10px rgba(0,0,0,,0.2)",
                    }}
                  />
                  <ProductTitle
                    title=""
                    className="text-white"
                    style={{ fontWeight: "bold" }}
                  />
                  <ProductButtons
                    className="custom-buttons"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  />  
                  <button onClick={ reset } >Reset</button>      
                  <button onClick={ ()=>increaseBy(-2) }>-2</button>  
                  <span>{ count }</span>   
                  {
                    !isMountCountReached &&
                   <button onClick={ ()=>increaseBy(2) }>+2</button>  
                  }
                </>
              )
            }           

          </ProductCard>
       
     
     
      
    </div>
  );
};

export default ShoppingPage;
