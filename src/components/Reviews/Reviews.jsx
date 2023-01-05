import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API';
import ReviewsCard from 'components/ReviewsCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviewsById(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return <ReviewsCard reviews={reviews} />;
};

export default Reviews;
