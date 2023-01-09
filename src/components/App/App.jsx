import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';

// import Home from 'Pages/Home';
// import Movies from 'Pages/Movies';
// import MovieDetails from 'Pages/MovieDetails';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
// import NotFound from 'Pages/NotFound';

const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const NotFound = lazy(() => import('Pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
