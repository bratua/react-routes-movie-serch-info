import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  NavigationBlock,
  HeaderBlock,
  NavButons,
} from 'components/Layout/Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <HeaderBlock>
        <NavigationBlock>
          <NavButons to="/">Home</NavButons>
          <NavButons to="/movies">Movies</NavButons>
        </NavigationBlock>
      </HeaderBlock>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;
