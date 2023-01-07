import * as API from '../API';
import {
  Outlet,
  useParams,
  Link,
  useLocation,
  // useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  NavButons,
  MovieDetailsButtons,
  Wrapper,
  BackButon,
} from 'Pages/MovieDetails.styled';
import MovieCard from 'components/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  // const navigate = useNavigate();

  const backLink = location.state?.from ?? '/';

  // console.log('MovieDetails location===> ', location);
  // console.log('MovieDetails backLink===> ', backLink);

  useEffect(() => {
    API.getMovieDetailsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  // navigate('cast');

  // console.log('movie  === ', movie);

  return (
    <Wrapper>
      <BackButon to={backLink}>BACK</BackButon>
      <MovieCard movie={movie}></MovieCard>
      <MovieDetailsButtons>
        <NavButons to="cast">Cast</NavButons>
        <NavButons to="reviews">Reviews</NavButons>
      </MovieDetailsButtons>
      <Outlet />
    </Wrapper>
  );
};

export default MovieDetails;
