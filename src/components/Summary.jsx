import React from 'react';

export default function Summary({ appQuestAchievement, character, characterName, selectedSkill, firstImpression, reward, riddleAnswer, selectedWeapon, selectedSoundtrack, reflection }) {
  return (
    <div className="form-div">
      <h2 className='summary-h2'>Congratulations!</h2>
      <p>You've completed the App Quest Adventure! You've earned the title of: {appQuestAchievement}</p>
      <p>Here's a summary of your journey:</p>
      <ul>
        <li><strong>Name:</strong> {characterName}</li>
        <li><strong>Character class:</strong> {character}</li>
        <li><strong>Chosen skill:</strong> {selectedSkill}</li>
        <li><strong>First Impression:</strong> {firstImpression}</li>
        <li><strong>Reward:</strong> {reward.selectedReward}</li>
        <li><strong>Riddle Answer:</strong> {riddleAnswer}</li>
        <li><strong>Selected Weapon:</strong> {selectedWeapon}</li>
        <li><strong>Selected Soundtrack:</strong> {selectedSoundtrack}</li>
        <li><strong>Reflection:</strong> {reflection}</li>
      </ul>
      <p>Thank you for embarking on this quest and providing your feedback.</p>
    </div>
  );
}
