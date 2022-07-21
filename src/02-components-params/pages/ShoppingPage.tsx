import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components/';





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
                    
                    style={{
                      boxShadow: "10px 10px 10px rgba(0,0,0,,0.2)",
                    }}
                  />
                  <ProductTitle
                    title=""
                    
                    style={{ fontWeight: "bold" }}
                  />
                  <ProductButtons
                  
                    style={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                  />  
                 
                  
                </>
              )
            }           

          </ProductCard>
       
     
     
      
    </div>
  );
};

export default ShoppingPage;
