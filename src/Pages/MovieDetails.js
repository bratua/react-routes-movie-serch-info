import * as API from '../API';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  // console.log('MovieDetails location===> ', location);
  // console.log('MovieDetails backLink===> ', backLink);

  useEffect(() => {
    API.getMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  // console.log('movie  === ', movie);

  const {
    original_title,
    homepage,
    poster_path,
    overview,
    genres,
    budget,
    production_countries,
  } = movie;

  return (
    <div>
      <Link to={backLink}>BACK</Link>
      <a href={homepage}>
        <h2>{original_title}</h2>
      </a>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <ul>
        {genres.map(genre => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </ul>
      <p>Budget: {budget}$</p>
      <div>
        Country:
        <ul>
          {production_countries.map(country => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      </div>
      <p>{overview}</p>

      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
