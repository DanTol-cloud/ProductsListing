import SearchBar from './SearchBar';
import { HeaderContainer, HeaderTitle } from '../styles/HeaderStyledComponents';
import SortButtons from './SortButtons';
import SelectCategory from './SelectCategory';
import PriceRange from './PriceRange';

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Products listing</HeaderTitle>
    <SearchBar />
    <SortButtons />
    <SelectCategory />
    <PriceRange />
  </HeaderContainer>
);

export default Header;
