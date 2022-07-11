import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/";

import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { useState } from "react";

const product1 = {
  id: "1",
  title: "Coffee Muf --card",
  img: "../coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Muf --meme",
  img: "../coffee-mug2.png",
};

interface ProductInCart extends Product {
  count: number;
}

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
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
