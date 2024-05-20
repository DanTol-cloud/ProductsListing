import { ButtonsContainer } from '../styles/HeaderStyledComponents';

import Button from './Button';
import { MouseEvent, useEffect, useState } from 'react';
import { sortProducts } from '../services/features/ProductSlice';
import { useAppDispatch } from '../app/hooks';

const buttonsNames = ['asc', 'desc'];

const SortButtons = () => {
  const dispatch = useAppDispatch();

  const [isActiveButton, setActiveButton] = useState<{
    ascButton: boolean;
    descButton: boolean;
  }>({
    ascButton: false,
    descButton: false,
  });
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return window.removeEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  }, []);

  const handleSort = (order: 'asc' | 'desc') => {
    dispatch(sortProducts(order));
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    //@ts-ignore
    if (event.target.name === 'asc') {
      setActiveButton((prev) => ({
        descButton: prev.descButton ? !prev.descButton : false,
        ascButton: true,
      }));
      handleSort('asc');
    } else {
      setActiveButton((prev) => ({
        descButton: true,
        ascButton: prev.descButton ? !prev.descButton : false,
      }));
      handleSort('desc');
    }
  };

  return (
    <ButtonsContainer>
      {buttonsNames.map((b, index) => (
        <Button
          key={index}
          name={buttonsNames[index]}
          onClick={handleButtonClick}
          isActive={
            buttonsNames[index] === 'asc'
              ? isActiveButton.ascButton
              : isActiveButton.descButton
          }
          text={
            innerWidth > 910
              ? buttonsNames[index] === 'asc'
                ? 'Sort by price from low to high'
                : 'Sort by price from high to low'
              : buttonsNames[index] === 'asc'
                ? 'Asc'
                : 'desc'
          }
        />
      ))}
    </ButtonsContainer>
  );
};

export default SortButtons;
