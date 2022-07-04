import  {ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/";

import  "../styles/custom-styles.css";

const product = {
    id:'1',
    title:'Coffee Muf --card',
    img:'../coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div >
            <h2>Shopping Page</h2>
            <hr />
            <div
                style= {{ display:'flex',flexDirection:'row', flexWrap:'wrap' }}
            >
                <ProductCard product={ product } className="bg-dark">  
                
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title="Hola taza" className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons"/>

                </ProductCard>

                <ProductCard product={ product } className="bg-dark"> 
                
                  <ProductImage 
                    className="custom-image"
                    style = {{
                        boxShadow: '10px 10px 10px rgba(0,0,0,,0.2)'
                    }}
                    />
                  <ProductTitle 
                    title='' 
                    className="text-white"
                    style={{ fontWeight:'bold' }}
                    />
                  <ProductButtons className="custom-buttons" style={{ 
                    display:'flex',
                    justifyContent:'end'
                   }}/>
  
                </ProductCard>

            </div>
        </div>
    );
};

export default ShoppingPage;

