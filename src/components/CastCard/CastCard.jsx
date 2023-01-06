import {
  Wrapper,
  Title,
  CastList,
  CastListItem,
  ActorName,
  ActorCharacter,
  ActorPhoto,
} from 'components/CastCard/CastCard.styled';

const CastCard = ({ cast }) => {
  return (
    <Wrapper>
      <Title>Cast:</Title>
      <CastList>
        {cast.map(({ name, character, profile_path }) => (
          <CastListItem key={name}>
            {profile_path ? (
              <ActorPhoto
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
            ) : (
              <ActorPhoto
                src="https://via.placeholder.com/200x300"
                alt={name}
              />
            )}
            <ActorName>{name}</ActorName>
            <ActorCharacter>({character})</ActorCharacter>
          </CastListItem>
        ))}
      </CastList>
    </Wrapper>
  );
};
export default CastCard;
