import { useSearchParams, useLocation } from 'react-router-dom';
import * as API from '../API';

// import { Wrapper } from 'Pages/Movies.styled.jsx';
import { useMemo, useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';
import Box from 'components/Box';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [serchedMovies, setSerchedMovies] = useState([]);
  const location = useLocation();

  //! --- get all search params
  const allSearchParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { name } = allSearchParams;

  // если в name будет undefuned или null то присваиваем пустую строку
  const movieName = name ?? '';
  //! --- get all search params

  const changeQuerySearch = query => {
    const newSearchQuery = query !== '' ? { name: query } : {};
    setSearchParams(newSearchQuery);
  };

  useEffect(() => {
    if (movieName === '') return;
    API.getMovieByName(movieName.toLowerCase()).then(setSerchedMovies);
  }, [movieName]);

  //   console.log('movieName', movieName);
  //   console.log('search result', serchedMovies);

  return (
    <Box>
      <h2>Movies page search</h2>
      <SearchBox value={movieName} onChange={changeQuerySearch} />

      {movieName !== '' && (
        <MoviesList movies={serchedMovies} state={{ from: location }} />
      )}
    </Box>
  );
};
export default Movies;

//  <MoviesList>
//    {serchedMovies.map(({ id, original_title, poster_path }) => {
//      return (
//        <MoviesListItem key={id}>
//          <Link to={`${id}`} state={{ from: location }}>
//            <MoviesItem>
//              {poster_path ? (
//                <img
//                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
//                  alt={original_title}
//                />
//              ) : (
//                <img
//                  src="https://via.placeholder.com/200x300"
//                  alt={original_title}
//                />
//              )}
//              <span>{original_title}</span>
//            </MoviesItem>
//          </Link>
//        </MoviesListItem>
//      );
//    })}
//  </MoviesList>;
