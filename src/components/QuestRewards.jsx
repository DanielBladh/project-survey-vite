import React, { useState } from "react";

export default function QuestRewards({ onRewardSelect }) {
  const [selectedReward, setSelectedReward] = useState(""); // This is the corrected line

  const handleRewardSelect = (reward) => {
    setSelectedReward(reward);
  };

  const handleNext = () => {
    // Create an object to hold the data
    const rewardData = {
      selectedReward: selectedReward,
    };
    // Call the onRewardSelect function with the reward data
    onRewardSelect(rewardData);
  };

  return (
    <div className="form-div">
      <h2>Choose Your Quest Reward</h2>
      <p>
        As you prepare for your next adventure, you have three quest rewards to
        choose from:
      </p>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="reward"
            value="clue"
            onChange={() => handleRewardSelect("Riddle Clue")}
          />
          A) A note with some sort of clue on it.
        </label>
        <label>
          <input
            type="radio"
            name="reward"
            value="potion"
            onChange={() => handleRewardSelect("Potion of invisibility")}
          />
          B) Potion of invisibility
        </label>
        <label>
          <input
            type="radio"
            name="reward"
            value="pouch"
            onChange={() => handleRewardSelect("Gold coins")}
          />
          C) A small pouch with gold coins.
        </label>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
