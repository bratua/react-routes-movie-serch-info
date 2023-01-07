import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 40px;
  font-weight: 700;
`;

export const ReviewList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ReviewListItem = styled.li`
  list-style: none;
  margin-top: 20px;
  padding: 20px;
  background-color: #dfdfdf;
  border-radius: 10px;
  /* :nth-child(odd) {
    background-color: #dfdfdf;
  } */
`;

export const ReviewAuthor = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 700;
`;

export const ReviewDate = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 700;
  font-style: italic;
`;

export const ReviewText = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
`;
