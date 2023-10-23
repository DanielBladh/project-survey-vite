import React, { useState } from "react";

export default function MysteriousRiddles({ onRiddleAnswer, onNext }) {
  const [riddleAnswer, setRiddleAnswer] = useState("");

  const handleAnswer = (answer) => {
    console.log("Riddle Answer: ", answer)
    setRiddleAnswer(answer);
  };

  return (
    <div className="form-div">
      <h2>Mysterious Riddles</h2>
      <p>In your journey through the app, you encounter a mysterious riddle:</p>
      <p>
        'I speak without a mouth and hear without ears. I have no body, but I
        come alive with wind.' What am I?
      </p>
      <input
        type="text"
        placeholder="Your answer"
        value={riddleAnswer}
        onChange={(e) => handleAnswer(e.target.value)}
      />
      <button onClick={() => onRiddleAnswer(riddleAnswer)}>
        Submit Answer
      </button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
