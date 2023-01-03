// import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
// import * as API from '../../API';
import Layout from 'components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home!!!!</div>} />
        <Route path="movies" element={<div>Movies!!!!</div>} />
        <Route path="*" element={<div>NotFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;

//   const [dayMovie, setDayMovie] = useState([]);
//   useEffect(() => {
//     API.getMovies('movie', 'day').then(setDayMovie);
//   }, []);
//   if (!dayMovie) {
//     return;
//   }
//   //   console.log(dayMovie);
//   return (
//     <div>
//       {dayMovie.map(movie => {
//         return <div key={movie.id}>{movie.original_title}</div>;
//       })}
//     </div>
//   );
