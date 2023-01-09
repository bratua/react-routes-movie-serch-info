import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0px;
`;

export const NavButons = styled(NavLink)`
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  border: 2px solid #000000;
  /* background-color: tomato; */
  border-radius: 10px;

  :hover,
  :focus {
    border: 2px solid orange;
    background-color: orange;
    color: #ffffff;
  }

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

export const BackButon = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  border: 2px solid #000000;
  /* background-color: tomato; */
  border-radius: 10px;

  :hover,
  :focus {
    border: 2px solid orange;

    background-color: orange;
    color: #ffffff;
  }
`;
