import { useState, useEffect } from 'react';
import * as API from '../API';
import PopularMovies from 'components/PopularMovies';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    API.getTrendingMovies('movie', 'day').then(setPopularMovies);
  }, []);

  if (!popularMovies) {
    return;
  }

  // console.log('MOVIES = HOME ', movies);

  return <PopularMovies popularMovies={popularMovies} />;
};

export default Home;
