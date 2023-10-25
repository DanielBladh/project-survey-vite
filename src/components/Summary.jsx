import React from "react";

export default function Summary({
  character,
  characterName,
  selectedSkill,
  reward,
  riddleAnswer,
  newNarrative,
  selectedSoundtrack,
  reflection,
}) {
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
          <strong>Riddle Answer:</strong> {riddleAnswer}
        </li>
        <li>
          <strong>Dragon Narrative:</strong> {newNarrative}
        </li>
        <li>
          <strong>Selected Soundtrack:</strong> {selectedSoundtrack}
        </li>
        <li>
          <strong>Reflection:</strong> {reflection}
        </li>
      </ul>
      <p>Thank you for embarking on this quest and providing your feedback.</p>
    </div>
  );
}
