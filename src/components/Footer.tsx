import { setCurrentPage } from '../services/features/ProductSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { FooterContainer } from '../styles/FooterStyledComponents';
import Button from './Button';

const Footer = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector(
    (state: RootState) => state.products
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <FooterContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          isActive={currentPage === index + 1}
          text={String(index + 1)}
        />
      ))}
    </FooterContainer>
  );
};

export default Footer;
