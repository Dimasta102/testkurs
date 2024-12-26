import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText) {
      addReview(reviewText);
      setReviewText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Напишите ваш отзыв"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ReviewForm;
