import React, { useState } from "react";

export default function AppJourneyReflection({ onReflection, onNext }) {
  const [reflection, setReflection] = useState("");
  const handleNextAndReflection = () => {
    onReflection(reflection); // Call the onReflection function
    onNext(); // Call the onNext function
  };

  console.log("Reflection Answer:", reflection);

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
        onChange={(e) => setReflection(e.target.value)}
      />
      <button onClick={handleNextAndReflection}>Submit Reflection and Next</button>
    </div>
  );
}
