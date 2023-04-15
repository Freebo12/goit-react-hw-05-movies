import { ReviewTitle, ReviewParagraph } from './InfoReview.styled';

export const InfoReviewList = ({ reviews }) => {
  if (reviews !== undefined) {
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <ReviewTitle>{review.author}</ReviewTitle>
            <ReviewParagraph>{review.content}</ReviewParagraph>
          </li>
        ))}
      </ul>
    );
  }
  return <p>We don't have any reviews for this video</p>;
};
