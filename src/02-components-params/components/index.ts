import { ProductCard as ProductCardHOC} from './ProductCard';


import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';



export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
/* export {ProductCard} from './ProductCard'; */
export { ProductImage } from './ProductImage';


export const ProductCard = Object.assign(ProductCardHOC,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard

