import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../API';

const Home = () => {
  const [movies, setDayMovie] = useState([]);

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
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
