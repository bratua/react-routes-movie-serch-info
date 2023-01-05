import {
  Wrapper,
  Title,
  ReviewList,
  ListItem,
  ReviewAuthor,
  ReviewDate,
  ReviewText,
} from 'components/ReviewsCard/ReviewsCard.styled';

const ReviewsCard = ({ reviews }) => {
  return (
    <Wrapper>
      <Title>Reviews</Title>
      <ReviewList>
        {reviews.map(({ author, content, created_at }) => {
          const localDateNormalize = new Date(created_at).toLocaleDateString();
          return (
            <ListItem key={created_at}>
              <ReviewAuthor>{author}</ReviewAuthor>
              <ReviewDate>{localDateNormalize}</ReviewDate>
              <ReviewText>{content}</ReviewText>
            </ListItem>
          );
        })}
      </ReviewList>
    </Wrapper>
  );
};

export default ReviewsCard;
