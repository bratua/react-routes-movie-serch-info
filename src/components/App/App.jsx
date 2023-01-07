import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import MovieDetails from 'Pages/MovieDetails';

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
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;
