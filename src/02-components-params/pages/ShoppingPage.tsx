import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from '../components/';


import '../styles/custom-styles.css';

import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {

  const { onProductChange, shoppingCart } =  useShoppingCart()

  return (
    <div>
      <h2>Shopping Page</h2>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="bg-dark"
            onChange={onProductChange}
            value={ shoppingCart[product.id]?.count || 0 }
          >
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
          </ProductCard>
        ))}
      </div>
      {/* Shopping cart */}
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={product.count}
            onChange = { onProductChange }
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,,0.2)",
              }}
            />

            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ShoppingPage;
