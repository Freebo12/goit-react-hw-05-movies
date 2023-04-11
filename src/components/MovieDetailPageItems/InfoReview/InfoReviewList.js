import PropTypes from 'prop-types';

export const InfoReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <span>{review.content}</span>
        </li>
      ))}
    </ul>
  );
};

InfoReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
