import { ProductInterface } from '../types';
import {
  ProductImage,
  ProductItem,
  ProductName,
} from '../styles/ProductsListStyledComponents';

const ProductListItem = ({ product }: { product: ProductInterface }) => {
  return (
    <ProductItem to={`product/${product.id}`}>
      <ProductName>{product.name}</ProductName>
      <ProductImage src={product.image} alt={product.name} />
      <p>{product.price}$</p>
    </ProductItem>
  );
};

export default ProductListItem;
