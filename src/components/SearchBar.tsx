import {
  SearchBarContainer,
  SearchBarInput,
} from '../styles/HeaderStyledComponents';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { ChangeEvent } from 'react';
import { setSearchQuery } from '../services/features/ProductSlice';

const SearchBar = () => {
  const { searchQuery } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
