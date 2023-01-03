import * as API from '../API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    API.getMovieById(movieId).then(setMovie);
  }, []);

  if (!movie) {
    return;
  }

  console.log('movie  === ', movie);
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
      <a href={homepage}>
        <h2>{original_title}</h2>
      </a>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <ul>
        {genres.map(genre => (
          <li>{genre.name}</li>
        ))}
      </ul>
      <p>Budget: {budget}$</p>
      <div>
        Country:
        <ul>
          {production_countries.map(country => (
            <li>{country.name}</li>
          ))}
        </ul>
      </div>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetails;
