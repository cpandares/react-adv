import  {ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/";

const product = {
    id:'1',
    title:'Coffee Muf --card',
    img:'../coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h2>Shopping Page</h2>
            <hr />
            <div
                style= {{ display:'flex',flexDirection:'row', flexWrap:'wrap' }}
            >
                <ProductCard product={ product }>  
                
                    <ProductCard.Image />
                    <ProductCard.Title title="Hola taza"/>
                    <ProductCard.Buttons />

                </ProductCard>

                <ProductCard product={ product }> 
                
                  <ProductImage />
                  <ProductTitle title=''/>
                  <ProductButtons />
  
                </ProductCard>

            </div>
        </div>
    );
};

export default ShoppingPage;

