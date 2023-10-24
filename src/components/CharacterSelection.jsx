import React, { useState, useEffect } from "react";

export default function CharacterSelection({ onNext, onCharacterSelect, previousStep }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [characterSkills, setCharacterSkills] = useState([]);

  const characters = [
    { name: "Wizard", skills: ["Fire", "Ice", "Lightning"] },
    { name: "Pirate", skills: ["Swordsmanship", "Navigation", "Plundering"] },
    {
      name: "Shieldmaiden",
      skills: ["Shield Mastery", "Battle Tactics", "Archery"],
    },
    {
      name: "Paladin",
      skills: ["Divine Auras", "Holy Powers", "Healing Powers"],
    },
  ];

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    const selectedCharacterData = characters.find(
      (char) => char.name === character
    );
    if (selectedCharacterData) {
      setCharacterSkills(selectedCharacterData.skills);
      setSelectedSkill(""); // Reset selected skill
    }
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setCharacterName(name);
  };

  const handleSkillSelect = (event) => {
    const skill = event.target.value;
    setSelectedSkill(skill);
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

  useEffect(() => {
    handleCharacterSelect(selectedCharacter);
  }, []);

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
          {characters.map((char) => (
            <label key={char.name}>
              <input
                type="radio"
                name="character"
                value={char.name}
                onChange={() => handleCharacterSelect(char.name)}
              />
              {char.name[0]}) {char.name}
            </label>
          ))}
        </div>
        <p>Select your character's special skill:</p>
        <select value={selectedSkill} onChange={handleSkillSelect}>
          <option value="">Select Skill</option>
          {characterSkills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
        <div>
        <button onClick={previousStep}>Previous</button>
        <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
