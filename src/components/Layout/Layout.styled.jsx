import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 20px;
`;

export const HeaderBlock = styled.div`
  border-bottom: 3px solid #000000;
`;

export const NavigationBlock = styled.nav`
  margin-bottom: 25px;
  margin-right: 100px;
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

export const NavButons = styled(NavLink)`
  padding: 10px;
  font-size: 40px;
  font-weight: 700;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  border-radius: 10px;

  &.active {
    color: #ffffff;
    background-color: orange;
  }
`;
