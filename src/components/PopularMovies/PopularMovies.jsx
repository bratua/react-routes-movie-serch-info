import { Link, useLocation } from 'react-router-dom';
import {
  Wrapper,
  MoviesList,
  MoviesListItem,
  MoviesItem,
} from 'components/PopularMovies/PopularMovies.styled';

const PopularMovies = ({ popularMovies }) => {
  const location = useLocation();
  // console.log('PopularMovies location===> ', location);
  console.log('PopularMovies ===> ', popularMovies);

  return (
    <Wrapper>
      <MoviesList>
        {popularMovies.map(({ id, original_title, poster_path }) => {
          return (
            <MoviesListItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <MoviesItem>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                    alt={original_title}
                  />
                  <span>{original_title}</span>
                </MoviesItem>
              </Link>
            </MoviesListItem>
          );
        })}
      </MoviesList>
    </Wrapper>
  );
};
export default PopularMovies;
