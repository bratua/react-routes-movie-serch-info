import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviewsById(movieId).then(setReviews);
  }, []);

  if (!reviews) {
    return;
  }

  //   console.log('reviews ===> ', reviews);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ author, content, created_at }) => {
          return (
            <li key={created_at}>
              <p>{author}</p>
              <p>{created_at}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
