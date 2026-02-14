import React, { useState } from 'react';

export default function StarRating({ initialRating = 0, onRate }) {
    const [hover, setHover] = useState(0);
    const [rating, setRating] = useState(initialRating);

    return (
        <div className="star-rating d-inline-block">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <i
                        key={index}
                        className={`bi ${ratingValue <= (hover || rating) ? 'bi-star-fill' : 'bi-star'} fs-4 me-1`}
                        style={{ cursor: 'pointer', color: ratingValue <= (hover || rating) ? '#ffc107' : '#ced4da' }}
                        onClick={() => {
                            setRating(ratingValue);
                            if (onRate) onRate(ratingValue);
                        }}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(0)}
                    ></i>
                );
            })}
        </div>
    );
}