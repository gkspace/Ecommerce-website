import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  // Round the rating to the nearest whole number
  const roundedRating = Math.round(rating);
  
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }
  
  return (
    <div className="star-rating">
      {stars} <span className="rating-value">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
