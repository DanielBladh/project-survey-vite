import React, { useState } from "react";

export default function AppJourneyReflection({ onReflection, onNext }) {
  const [reflection, setReflection] = useState("");
  const [error, setError] = useState(""); 

  const handleNextAndReflection = () => {
    if (reflection.length < 4) {
      setError("Please enter at least 4 characters.");
    } else if (reflection.length > 40) {
      setError("Maximum 40 characters allowed.");
    } else {
      onReflection(reflection);
      onNext();
    }
  };

  return (
    <div className="form-div">
      <h2>App Journey Reflection</h2>
      <p>
        After completing the quest, what advice would you give to fellow
        adventurers who embark on this app journey:
      </p>
      <textarea
        rows="4"
        cols="50"
        value={reflection}
        onChange={(e) => {
          const text = e.target.value;
          setReflection(text);
          setError(""); 
        }}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p style={{ color: "gray" }}>
        Please keep your reflection short and concise.
      </p>
      <button onClick={handleNextAndReflection}>
        Submit Reflection and Next
      </button>
    </div>
  );
}
