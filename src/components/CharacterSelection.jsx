import React, { useState } from "react";

export default function CharacterSelection({ onNext, onCharacterSelect }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [characterName, setCharacterName] = useState("");

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    console.log("Selected Character:", character);
  };

  const handleSkillSelect = (event) => {
    const skill = event.target.value;
    console.log("Selected Skill:", skill);
    setSelectedSkill(skill);
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setCharacterName(name);
    console.log("Character Name:", name);
  };

  const handleNext = () => {
    // Create an object to hold the data
    const characterData = {
      selectedCharacter,
      selectedSkill,
      characterName,
    };
    // Call the onNext function with the character data
    onNext(characterData);
  };

  return (
    <>
      <h2>Character Creation</h2>
      <div className="form-div">
        <p>Character Name:</p>
        <input
          type="text"
          value={characterName}
          onChange={handleNameChange}
          placeholder="Enter Character Name"
        />
        <p>Choose your app class:</p>
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="character"
              value="Wizard"
              onChange={() => handleCharacterSelect("Wizard")}
            />
            A) Wizard
          </label>
          <label>
            <input
              type="radio"
              name="character"
              value="Pirate"
              onChange={() => handleCharacterSelect("Pirate")}
            />
            B) Pirate
          </label>
          <label>
            <input
              type="radio"
              name="character"
              value="Paladin"
              onChange={() => handleCharacterSelect("Paladin")}
            />
            C) Paladin
          </label>
          <label>
            <input
              type="radio"
              name="character"
              value="Shieldmaiden"
              onChange={() => handleCharacterSelect("Shieldmaiden")}
            />
            D) Shieldmaiden
          </label>
        </div>
        <p>Select your character's special skill:</p>
        <select value={selectedSkill} onChange={handleSkillSelect}>
          <option value="">Select Skill</option>
          <option value="Magic">Magic</option>
          <option value="Swordsmanship">Swordsmanship</option>
          <option value="Technology">Holy powers</option>
          <option value="Stealth">Stealth</option>
        </select>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}
