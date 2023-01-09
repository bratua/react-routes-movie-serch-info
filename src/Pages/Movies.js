import { useSearchParams, useLocation } from 'react-router-dom';
import * as API from '../API';

import { Wrapper } from 'Pages/Movies.styled.jsx';
import { useMemo, useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';
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
  const { query } = allSearchParams;

  // если в name будет undefuned или null то присваиваем пустую строку
  const movieName = query ?? '';
  //! --- get all search params

  const changeQuerySearch = query => {
    const newSearchQuery = query !== '' ? { query } : {};
    setSearchParams(newSearchQuery);
  };

  useEffect(() => {
    if (movieName === '') return;
    API.getMovieByName(movieName.toLowerCase()).then(setSerchedMovies);
  }, [movieName]);

  //   console.log('movieName', movieName);
  //   console.log('search result', serchedMovies);

  return (
    <main>
      <Wrapper>
        <h1>Movies search page</h1>
        <SearchBox value={movieName} onChange={changeQuerySearch} />

        {movieName !== '' && (
          <MoviesList movies={serchedMovies} state={{ from: location }} />
        )}
      </Wrapper>
    </main>
  );
};
export default Movies;
