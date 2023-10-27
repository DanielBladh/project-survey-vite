import React, { useState } from "react";

export default function QuestImprovements({ onNext, onImprovementsSubmit }) {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleRatingChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    if (!isNaN(newRating) && newRating >= 1 && newRating <= 10) {
      setRating(newRating);
    }
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 10) {
      setValidationError("Please select a rating between 1 and 10.");
    } else {
      onImprovementsSubmit(
        `Rating: ${rating}`
      );
      setSubmitted(true);
    }
  };

  return (
    <div className="form-div">
      <h2>Quest Improvements and Rating</h2>
      <p>We value your feedback and rating!</p>
      {submitted ? (
        <div>
          <p style={{color: "rgb(112, 1, 1)"}}>
            Thank you for your feedback and rating! Your input has been noted.
          </p>
          <button onClick={() => onNext()}>Continue</button>
        </div>
      ) : (
        <div>
          <div>
            <label style={{ fontWeight: "bold" }}>
              Rate your quest experience (1-10):
            </label>
            <div className="slider-container">
              <span>1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={rating}
                onChange={handleRatingChange}
              />
              <span>10</span>
            </div>
              <button onClick={handleSubmit}>Submit Rating</button>
          </div>
          {validationError && <p style={{ color: "red" }}>{validationError}</p>}
        </div>
      )}
      
    </div>
  );
}
