import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: 'Отличное обслуживание!' },
  ]);

  const addReview = (newReview) => {
    setReviews([...reviews, { id: reviews.length + 1, text: newReview }]);
  };

  return (
    <div>
      <h1>Отзывы клиентов</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>

      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Reviews;
