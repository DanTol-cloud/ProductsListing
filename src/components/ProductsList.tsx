import ProductListItem from './ProductListItem';
import { ProductsListContainer } from '../styles/ProductsListStyledComponents';
import { ProductInterface } from '../types';

const ProductsList = ({
  paginatedProducts,
  isLoading,
}: {
  paginatedProducts: ProductInterface[];
  isLoading: boolean;
}) => (
  <ProductsListContainer>
    {isLoading && <h1>Loading...</h1>}
    {paginatedProducts &&
      paginatedProducts.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
  </ProductsListContainer>
);

export default ProductsList;
