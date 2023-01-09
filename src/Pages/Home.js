import { useState, useEffect } from 'react';
import * as API from '../API';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies('movie', 'day').then(setPopularMovies);
  }, []);

  if (!popularMovies) {
    return;
  }

  // console.log('MOVIES = HOME ', movies);

  return <MoviesList movies={popularMovies} />;
};

export default Home;
