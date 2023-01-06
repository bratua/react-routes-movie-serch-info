import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API';
import CastCard from 'components/CastCard';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieCastById(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  // console.log('Cast ===> ', cast);

  return <CastCard cast={cast} />;
};
export default Cast;
