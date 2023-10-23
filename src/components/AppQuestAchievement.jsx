import React, { useState } from 'react';

export default function AppQuestAchievement({ onSurveyComplete }) {
  const [selectedAchievement, setSelectedAchievement] = useState('');
  const achievements = ['App Archmage', 'App Buccaneer', 'App Astronaut'];

  const handleAchievementSelect = (achievement) => {
    setSelectedAchievement(achievement);
  };

  return (
    <div>
      <h2>App Quest Achievement</h2>
      <p>Congratulations! You've completed the App Quest Adventure!</p>
      <p>You've earned the title of:</p>
      {achievements.map((achievement, index) => (
        <label key={index}>
          <input
            type="radio"
            name="selectedAchievement"
            value={achievement}
            checked={selectedAchievement === achievement}
            onChange={() => handleAchievementSelect(achievement)}
          />
          {achievement}
        </label>
      ))}
      <button onClick={() => onSurveyComplete(selectedAchievement)}>Next</button>
    </div>
  );
}
