import React, { useState } from "react";

export default function QuestRewards({ onRewardSelect }) {
  const [selectedReward, setSelectedReward] = useState("");

  const handleRewardSelect = (reward) => {
    console.log("QuestReward:", reward);
    setSelectedReward(reward);
  };

  const handleNext = () => {
    // Create an object to hold the data
    const rewardData = {
      selectedReward: selectedReward, // Make sure it's a string
    };
    // Call the onRewardSelect function with the reward data
    onRewardSelect(rewardData);
  };

  return (
    <div className="form-div">
      <h2>Quest Rewards</h2>
      <p>What kind of treasure would motivate you to complete this quest:</p>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="reward"
            value="Endless free coffee"
            onChange={() => handleRewardSelect("Endless free coffee")}
          />
          A) Endless free coffee
        </label>
        <label>
          <input
            type="radio"
            name="reward"
            value="Chest of gold coins"
            onChange={() => handleRewardSelect("Chest of gold coins")}
          />
          B) A chest of gold coins
        </label>
        <label>
          <input
            type="radio"
            name="reward"
            value="Lifetime supply of wizard robes"
            onChange={() =>
              handleRewardSelect("Lifetime supply of wizard robes")
            }
          />
          C) A lifetime supply of wizard robes
        </label>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
