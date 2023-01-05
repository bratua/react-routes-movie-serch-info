import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../API';

const Home = () => {
  const [movies, setDayMovie] = useState([]);
  const location = useLocation();
  // console.log('Home location===> ', location);

  useEffect(() => {
    API.getTrendingMovies('movie', 'day').then(setDayMovie);
  }, []);

  if (!movies) {
    return;
  }

  // console.log('MOVIES = HOME ', movies);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
