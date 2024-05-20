import { MouseEvent } from 'react';
import { SortButton as MyButton } from '../styles/HeaderStyledComponents';

const Button = ({
  name,
  onClick,
  isActive,
  text,
}: {
  name?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  text: string;
}) => (
  <MyButton name={name} activeColor={isActive} onClick={onClick}>
    {text}
  </MyButton>
);

export default Button;
