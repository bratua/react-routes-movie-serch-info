import styled from 'styled-components';

export const Wrapper = styled.div`
  /* margin: 10px; */
  margin: 0;
`;

export const MoviesList = styled.ul`
  padding: 0;
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 20px;

  text-align: center;
`;

export const MoviesListItem = styled.li`
  width: 200px;
  list-style: none;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

export const MoviesItem = styled.div`
  /* display: flex;
  gap: 20px;
  align-items: center; */
`;
