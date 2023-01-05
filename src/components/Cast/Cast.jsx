import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieCastById(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  //   console.log('Cast ===> ', cast);

  return (
    <div>
      <h3>Cast:</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.name}>
            <div>
              <p>{actor.name}</p>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/200x300"
                  alt={actor.name}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
