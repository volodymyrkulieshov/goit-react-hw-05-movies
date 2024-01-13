import { NavLink } from 'react-router-dom';
import { HeaderContainer, HeaderList, HeaderItem } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderList>
          <HeaderItem>
            <NavLink to="/">Home</NavLink>
          </HeaderItem>
          <HeaderItem>
            <NavLink to="/movies">Movies</NavLink>
          </HeaderItem>
        </HeaderList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
