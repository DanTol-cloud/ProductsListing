import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10rem auto;
  border-width: 5px 5px;
  border-radius: 30px;
`;

export const ProductItem = styled(Link)`
  display: flex;
  flex: 1 0 auto;
  width: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  border-radius: 15px;
  margin: 1.5rem;
  border: 15px solid #3278a4;
  border-block: 1rem double #726b8c;
  writing-mode: horizontal-tb;
  direction: rtl;
`;

export const ProductName = styled.span`
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
`;

export const ProductImage = styled.img`
  width: 50%;
`;
