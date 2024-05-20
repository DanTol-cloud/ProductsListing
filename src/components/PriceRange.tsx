import {
  PriceRangeContainer,
  PriceRangeInput,
  PriceRangeLabel,
} from '../styles/HeaderStyledComponents';
import { ChangeEvent } from 'react';
import { filterByPriceRange } from '../services/features/ProductSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

const PriceRange = () => {
  const dispatch = useAppDispatch();
  const { priceRange, selectedPriceRange } = useAppSelector(
    (state: RootState) => state.products
  );

  const handlePriceRangeFilter = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newRange = [...selectedPriceRange] as [number, number];
    newRange[index] = Number(event.target.value);
    dispatch(filterByPriceRange(newRange));
  };

  return (
    <PriceRangeContainer>
      <PriceRangeLabel>
        Min Price:
        <PriceRangeInput
          type="number"
          value={selectedPriceRange[0]}
          min={priceRange[0]}
          max={selectedPriceRange[1]}
          onChange={(e) => handlePriceRangeFilter(e, 0)}
        />
      </PriceRangeLabel>
      <PriceRangeLabel>
        Max Price:
        <PriceRangeInput
          type="number"
          value={selectedPriceRange[1]}
          min={selectedPriceRange[0]}
          max={priceRange[1]}
          onChange={(e) => handlePriceRangeFilter(e, 1)}
        />
      </PriceRangeLabel>
    </PriceRangeContainer>
  );
};

export default PriceRange;
