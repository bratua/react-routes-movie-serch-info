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

export const CastList = styled.ul`
  padding: 0;
  margin: 20px 0 0 0;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CastListItem = styled.li`
  list-style: none;
  padding: 20px;
  background-color: #dfdfdf;
  border-radius: 10px;
`;

export const ActorName = styled.p`
  width: 198px;
  margin: 0;
  font-size: 20px;
  text-decoration-line: underline;
  font-weight: 700;
  text-align: center;
`;

export const ActorCharacter = styled.p`
  width: 180px;
  margin: 0;
  font-size: 18px;
  font-style: italic;
  text-align: center;
`;

export const ActorPhoto = styled.img`
  display: block;
  margin-bottom: 5px;
`;
