import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
`;

export const MovieTitleLink = styled.a`
  display: table;
  /* max-width: 60%; */
  margin: 0 auto;
  text-decoration: none;
  /* background-color: #ccc; */
`;

export const MovieTitle = styled.span`
  display: block;
  font-size: 50px;
  font-weight: 700;
  color: #000000;
  text-align: center;
  padding: 20px;
  margin: 20px;

  :hover,
  :focus {
    /* border: 3px solid orange; */
    border-radius: 20px;
    background-color: orange;
    color: #ffffff;
  }
`;

export const MovieImage = styled.img`
  display: block;
`;

export const ListTitle = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 700;
`;

export const MovieList = styled.ul`
  margin: 0 0 30px 0;
  padding-left: 10px;
  list-style: none;
  font-size: 25px;
`;
