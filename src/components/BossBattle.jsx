import React, { useState } from "react";
import potion from "../assets/potion.png"

export default function BossBattle({ onNext, selectedReward, selectedSkill }) {
  const [proceed, setProceed] = useState(false);
  const [showProceedButton, setShowProceedButton] = useState(false);
  const [selectedRewardType, setSelectedRewardType] = useState(
    selectedReward.selectedReward
  );
  const [narrative, setNarrative] = useState("");
  const [newNarrative, setNewNarrative] = useState(""); // State for newNarrative

  const handleProceed = () => {
    setProceed(true);
    setShowProceedButton(true);

    let newNarrative = "";

    if (selectedRewardType === "Riddle Clue" && selectedSkill && !proceed) {
      newNarrative = `You courageously fought the dragon`;
    } else if (selectedRewardType === "Potion of invisibility" && !proceed) {
      newNarrative = `You decided to use the Potion of Invisibility`;
    } else if (selectedRewardType === "Gold coins" && !proceed) {
      newNarrative = `You attempted to bribe the dragon with gold coins`;
    }

    const fullNarrative = newNarrative + getFullNarrative();

    setNarrative(fullNarrative);
    setNewNarrative(newNarrative); // Store newNarrative in state
  };

  const getFullNarrative = () => {
    if (selectedRewardType === "Riddle Clue" && selectedSkill && !proceed) {
      return ` with your ${selectedSkill}, showcasing your incredible prowess. With determination and skill, you defeated the dragon and secured your place as a legendary hero.`;
    } else if (selectedRewardType === "Potion of invisibility" && !proceed) {
      return `, allowing you to sneak past the dragon without alerting it. Your stealthy approach was a success, and you continued your quest undetected.`;
    } else if (selectedRewardType === "Gold coins" && !proceed) {
      return `. Through clever negotiation and persuasion, you managed to strike a deal with the dragon, avoiding a direct confrontation and achieving your objective.`;
    }
  };

  const handleNextStep = () => {
    onNext(newNarrative);
  };

  return (
    <div className="form-div">
      <h2>The Dragon's Lair</h2>
      <p>
        You've reached the heart of the app, where a menacing dragon awaits. The
        dragon is known to guard valuable treasures and secrets. How will you
        approach this formidable foe?
      </p>
      <div>
        {selectedRewardType === "Riddle Clue" ? (
          <p>Your inventory is empty.</p>
        ) : (
          <p>
            Your inventory:{" "}
            <span style={{ borderBottom: "1px solid black" }}>
              {selectedRewardType}
            </span>
          </p>
        )}
        {selectedRewardType === "Riddle Clue" && selectedSkill && !proceed ? (
          <div>
            You have no items to use. It seems your only option is to fight.
            <button style={{marginTop: "20px"}} onClick={handleProceed}>
              Use "{selectedSkill}"
            </button>
          </div>
        ) : selectedRewardType === "Potion of invisibility" && !proceed ? (
          <div>
            Use the potion to sneak past the dragon.
            <button className="bossButton" onClick={handleProceed}>
              <img className="potionIcon" src={potion} alt="Potion" style={{width: "15px", height: "15px"}}/>
              Drink Potion
            </button>
          </div>
        ) : selectedRewardType === "Gold coins" && !proceed ? (
          <div>
            Try to bribe the dragon with the pouch of gold:
            <button className="bossButton" onClick={handleProceed}>
              Offer gold
            </button>
          </div>
        ) : proceed ? (
          <div></div>
        ) : (
          <div>Invalid or missing previous choices.</div>
        )}
      </div>
      {narrative && (
        <div className="narrative-div">
          <p style={{color: "rgb(112, 1, 1)"}}>{narrative}</p>
          {showProceedButton && (
            <button className="clueButton" onClick={handleNextStep}>
              Continue
            </button>
          )}
        </div>
      )}
    </div>
  );
}
