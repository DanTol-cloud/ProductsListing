import ProductsList from '../components/ProductsList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { useGetProductsQuery } from '../services';
import { useEffect } from 'react';
import { setProducts } from '../services/features/ProductSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, currentPage, itemsPerPage } = useAppSelector(
    (state: RootState) => state.products
  );
  const { data: productsData, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (productsData) {
      dispatch(setProducts(productsData));
    }
  }, [dispatch, productsData]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Header />
      <ProductsList
        paginatedProducts={paginatedProducts}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
};

export default Home;
