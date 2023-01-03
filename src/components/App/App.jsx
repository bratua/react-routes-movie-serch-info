import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'Pages/Home';
import MovieDetails from 'Pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies!!!!</div>} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;
