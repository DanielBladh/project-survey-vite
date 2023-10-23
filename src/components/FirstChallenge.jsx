import React, { useState } from "react";

export default function FirstChallenge({ onNext, onFirstImpressionSelect }) {
  const [firstImpression, setFirstImpression] = useState("");

  const handleFirstImpressionSelect = (impression) => {
    console.log("First impression:", impression);
    setFirstImpression(impression);
  };
  return (
    <div className="form-div">
      <h2>The First Challenge</h2>
      <p>You've just entered the app's portal. What's your first impression:</p>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="firstImpression"
            value="Magical wonderland"
            onChange={() => handleFirstImpressionSelect("Magical wonderland")}
          />
          A) It's a magical wonderland!
        </label>
        <label>
          <input
            type="radio"
            name="firstImpression"
            value="Ahoy, matey!"
            onChange={() => handleFirstImpressionSelect("Ahoy, matey!")}
          />
          B) Ahoy, matey!
        </label>
        <label>
          <input
            type="radio"
            name="firstImpression"
            value="Houston, we've landed"
            onChange={() =>
              handleFirstImpressionSelect("Houston, we've landed")
            }
          />
          C) Houston, we've landed.
        </label>
      </div>
      <button onClick={() => onFirstImpressionSelect(firstImpression)}>
        Next
      </button>
    </div>
  );
}
