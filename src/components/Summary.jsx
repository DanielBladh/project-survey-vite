import React from "react";

export default function Summary({
  character,
  characterName,
  selectedSkill,
  reward,
  riddleAnswer,
  newNarrative,
  reflection,
  improvements,
}) {
  const handlePlayAgain = () => {
    // Reload the app to start over
    window.location.reload();
  };

  const isRiddleAnswerCorrect = riddleAnswer.toLowerCase() === "echo";

  return (
    <div className="form-div">
      <h2 className="summary-h2">Congratulations!</h2>
      <p>You've completed the App Quest Adventure!</p>
      <p>Here's a summary of your journey:</p>
      <ul>
        <li>
          <strong>Name:</strong> {characterName}
        </li>
        <li>
          <strong>Character class:</strong> {character}
        </li>
        <li>
          <strong>Chosen skill:</strong> {selectedSkill}
        </li>
        <li>
          <strong>Chosen reward:</strong> {reward.selectedReward}
        </li>
        <li>
          <strong>Riddle Answer:</strong> {riddleAnswer}{" "}
          {isRiddleAnswerCorrect ? "(correct)" : "(incorrect)"}
        </li>
        <li>
          <strong>Dragon Narrative:</strong> {newNarrative}
        </li>
        <li>
          <strong>Quest rating:</strong> {improvements}
        </li>
        <li>
          <strong>Reflection:</strong> {reflection}
        </li>
      </ul>
      <p>Thank you for embarking on this quest and providing your feedback.</p>
      <button className="playAgainButton" onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}
