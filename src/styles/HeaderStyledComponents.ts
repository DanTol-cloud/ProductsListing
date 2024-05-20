import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  flex: 1;
  height: 5rem;
  width: 100%;
  background-color: #726b8c;
  border: 3px solid black;
  border-radius: 0 0 15px 15px;
  padding: 1rem;
`;

export const HeaderTitle = styled.h1`
  align-self: center;
  font-size: 36px;
  margin: 0 0.3rem;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid black;
  border-radius: 30px;
  background-color: #ffff;
  margin: 1.5rem 0.3rem 1.5rem 0.3rem;
`;

export const SearchBar = styled.input`
  display: flex;
  border: none;
  flex: 1;
  width: 20%;
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  border-radius: 30px;
  margin: 0 1rem 0 1rem;
  outline: none;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
`;

export const SortButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#32B0A4' : '#3278a4')};
  border: 2px solid black;
  border-radius: 30px;
  background-image: none;
  cursor: pointer;
  font-size: 18px;
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 50%;
  height: 4rem;
  border-radius: 0.25em;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;

  &:after {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    bottom: 25px;
    content: '\\25BC';
    transition: 0.25s all ease;
    pointer-events: none;
    border-radius: 0 14px 14px 0;
    font-size: 24px;
  }

  /* Transition */

  &:hover::after {
    color: #32dba4;
  }
`;

export const CategorySelect = styled.select`
  appearance: none;
  outline: 10px;
  flex: 1;
  box-shadow: none;
  display: flex;
  height: 3rem;
  background-color: #3278a4;
  background-image: none;
  border: 2px solid black;
  border-radius: 15px;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 18px;
`;

export const CategoryToChose = styled.option`
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
`;

export const PriceRangeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PriceRangeLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 18px;
`;

export const PriceRangeInput = styled.input`
  display: flex;
  flex: 1 1 auto;
  margin-left: 1rem;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0.5rem;
  font-family: 'Radio Canada Big', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 16px;
  background-color: #3278a4;
  outline: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
