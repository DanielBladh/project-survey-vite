import React, { useState } from "react";

export default function MysteriousRiddles({
  onRiddleAnswer,
  onNext,
  selectedReward,
}) {
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const [showClue, setShowClue] = useState(false); // Add a state for showing/hiding the clue

  const handleAnswer = (answer) => {
    console.log("Riddle Answer: ", answer);
    setRiddleAnswer(answer);
  };

  const clues = {
    "Riddle Clue":
      "'I am a reflection of sound, repeating what you say when you're near...'",
  };

  // Access the selectedReward property within the object
  const selectedRewardType = selectedReward.selectedReward;
  const clueText = clues[selectedRewardType];

  const handleShowClue = () => {
    // Toggle the showClue state when the button is clicked
    setShowClue(!showClue);
  };

  return (
    <div className="form-div">
      <h2>Mysterious Riddles</h2>
      <p>In your journey through the app, you encounter a mysterious riddle:</p>
      <p style={{color: "white"}}>
        'I speak without a mouth and hear without ears. I have no body, but I
        come alive with wind.' What am I?
      </p>
      {selectedRewardType === "Riddle Clue" && (
        <div>
          <p>You chose the clue as quest reward, this is the time to use it: <br/></p>
          {showClue ? (
            <div>
              <p>You received a clue:</p>
              <p style={{color: "rgb(112, 1, 1)", padding: "15px"}}>{clueText}</p>
            </div>
          ) : (
            <button className="clueButton" onClick={handleShowClue}>Use Clue</button>
          )}
        </div>
      )}
      <input
        type="text"
        placeholder="Your answer"
        value={riddleAnswer}
        onChange={(e) => handleAnswer(e.target.value)}
        style={{margin: "10px"}}
      />
      <button onClick={() => onRiddleAnswer(riddleAnswer)}>Submit Answer</button>
    </div>
  );
}
