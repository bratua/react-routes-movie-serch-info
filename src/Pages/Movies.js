import { useSearchParams } from 'react-router-dom';
import * as API from '../API';

import { Wrapper } from 'Pages/Movies.styled.jsx';
import { useMemo, useState, useEffect } from 'react';
import SearchBox from 'components/SearchBox';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [serchedMovies, setSerchedMovies] = useState([]);

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
  console.log('search result', serchedMovies);

  return (
    <Wrapper>
      <h2>Movies page search</h2>
      <SearchBox value={movieName} onChange={changeQuerySearch} />

      {/* Filtred Movie */}
      {movieName !== '' && (
        <div>
          <p>Search result</p>
          <ul>
            {serchedMovies.map(movie => (
              <li>{movie.original_title}</li>
            ))}
          </ul>
        </div>
      )}
    </Wrapper>
  );
};
export default Movies;
