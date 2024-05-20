import { useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../services';
import {
  BackBtn,
  DescriptionContainer,
  DescriptionText,
  DetailsContainer,
  DetailsDescription,
  DetailsHeader,
  DetailsImg,
  DetailsSection,
} from '../styles/ProductsDetailsStyledComponents';
import { HeaderTitle } from '../styles/HeaderStyledComponents';
import { useNavigate } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  //@ts-ignore
  const { data: product, isLoading } = useGetProductsByIdQuery(id);
  return (
    <DetailsContainer>
      {isLoading && <h1>Loading...</h1>}
      {product && (
        <>
          <DetailsHeader>
            <BackBtn onClick={goBack}>Back</BackBtn>
            <HeaderTitle>
              {product?.name} - {product?.price}$
            </HeaderTitle>
          </DetailsHeader>
          <DetailsSection>
            <DetailsImg src={product?.image} alt={product?.name} />

            <DescriptionContainer>
              <DetailsDescription>Description</DetailsDescription>
              <DescriptionText>{product?.description}</DescriptionText>
              <DetailsDescription>Category</DetailsDescription>
              <DescriptionText>{product?.category}</DescriptionText>
            </DescriptionContainer>
          </DetailsSection>
        </>
      )}
    </DetailsContainer>
  );
};

export default ProductDetailsPage;
