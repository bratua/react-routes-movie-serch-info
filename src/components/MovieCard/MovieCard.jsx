import {
  Wrapper,
  Container,
  MovieTitle,
  MovieTitleLink,
  MovieImage,
  MovieList,
  ListTitle,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const {
    original_title,
    homepage,
    poster_path,
    overview,
    genres,
    budget,
    production_countries,
  } = movie;

  console.log(movie);

  return (
    <Wrapper>
      <MovieTitleLink href={homepage}>
        <MovieTitle>{original_title}</MovieTitle>
      </MovieTitleLink>
      <Container>
        {poster_path ? (
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
        ) : (
          <MovieImage
            src="https://via.placeholder.com/500x750"
            alt={original_title}
          />
        )}

        <div>
          <ListTitle>
            Genres
            {/* {genres.map(({ name }) => (
              <p>{name}</p>
            ))} */}
          </ListTitle>
          <MovieList>
            {genres.map(genre => (
              <li key={genre.name}>{genre.name}</li>
            ))}
          </MovieList>

          <ListTitle>Budget</ListTitle>
          <MovieList>
            <li>${budget}</li>
          </MovieList>

          <ListTitle>Country</ListTitle>
          <MovieList>
            {production_countries.map(country => (
              <li key={country.name}>{country.name}</li>
            ))}
          </MovieList>

          <ListTitle>Overview</ListTitle>
          <MovieList>
            <li>{overview}</li>
          </MovieList>
        </div>
      </Container>
    </Wrapper>
  );
};

export default MovieCard;
