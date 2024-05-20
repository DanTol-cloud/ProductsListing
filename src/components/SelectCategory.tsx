import {
  CategorySelect,
  CategoryToChose,
  SelectContainer,
} from '../styles/HeaderStyledComponents';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { filterByCategory } from '../services/features/ProductSlice';

const SelectCategory = () => {
  const dispatch = useAppDispatch();

  const { categories, selectedCategory } = useAppSelector(
    (state: RootState) => state.products
  );

  const handleFilter = (category = 'All') => {
    dispatch(filterByCategory(category));
  };

  return (
    <SelectContainer>
      <CategorySelect
        value={selectedCategory}
        onChange={(e) => handleFilter(e.target.value)}
      >
        {categories.map((category) => (
          <CategoryToChose key={category} value={category}>
            {category}
          </CategoryToChose>
        ))}
      </CategorySelect>
    </SelectContainer>
  );
};

export default SelectCategory;
