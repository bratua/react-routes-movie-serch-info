import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavButons = styled(NavLink)`
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  border-radius: 10px;

  &.active {
    color: #ffffff;
    background-color: orange;
  }
`;

export const MovieDetailsButtons = styled.div`
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
    list-style: none;
    color: #000000;
  }
`;
