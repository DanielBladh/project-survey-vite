import React, { useState } from "react";

export default function MysteriousRiddles({
  onRiddleAnswer,
  onNext,
  selectedReward,
}) {
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const [showClue, setShowClue] = useState(false);
  const [inputError, setInputError] = useState(false); // Add inputError state

  const handleAnswer = (answer) => {
    setRiddleAnswer(answer);
    // Clear the input error when the user types something
    setInputError(false);
  };

  const clues = {
    "Riddle Clue":
      "'I am a reflection of sound, repeating what you say when you're near...'",
  };

  const selectedRewardType = selectedReward.selectedReward;
  const clueText = clues[selectedRewardType];

  const handleShowClue = () => {
    setShowClue(!showClue);
  };

  const handleRiddleSubmission = () => {
    // Validate the input using a regular expression
    const regexPattern = /^[A-Za-z ]+$/;
    if (!regexPattern.test(riddleAnswer)) {
      setInputError(true);
    } else {
      setInputError(false);
      onRiddleAnswer(riddleAnswer);
    }
  };

  return (
    <div className="form-div">
      <h2>Mysterious Riddles</h2>
      <p>In your journey through the app, you encounter a mysterious riddle:</p>
      <p style={{ color: "rgb(112, 10, 10)" }}>
        'I speak without a mouth and hear without ears. I have no body, but I
        come alive with wind.' What am I?
      </p>
      {selectedRewardType === "Riddle Clue" && (
        <div>
          <p>
            You chose the clue as a quest reward, this is the time to use it:{" "}
            <br />
          </p>
          {showClue ? (
            <div>
              <p>You received a clue:</p>
              <p style={{ color: "rgb(112, 1, 1)", padding: "15px" }}>
                {clueText}
              </p>
            </div>
          ) : (
            <button className="clueButton" onClick={handleShowClue}>
              Use Clue
            </button>
          )}
        </div>
      )}
      <input
        type="text"
        placeholder="Your answer"
        value={riddleAnswer}
        onChange={(e) => handleAnswer(e.target.value)}
        style={{ margin: "10px" }}
        required
      />
      {inputError && ( // Show the error message when inputError is true
        <p style={{ color: "red" }}>
          Input is required and can only contain letters and spaces.
        </p>
      )}
      <button onClick={handleRiddleSubmission}>Submit answer</button>
    </div>
  );
}
