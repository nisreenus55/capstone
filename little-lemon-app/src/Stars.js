import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Stars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <section className="testmon">
      <h2>Testimonials</h2>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              size={50}
              className="star"
              color={currentRating <= (hover || rating) ? "black" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Your rating is {rating}</p>
    </section>
  );
};

export default Stars;
