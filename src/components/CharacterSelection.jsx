import React, { useState, useEffect } from "react";

export default function CharacterSelection({ onNext, previousStep }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [characterSkills, setCharacterSkills] = useState([]);
  const [nameError, setNameError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const characters = [
    { name: "Wizard", skills: ["Fireball", "Ice Lance", "Lightning bolt"] },
    {
      name: "Pirate",
      skills: ["Cutlass Strike", "Cannon Barrage", "Blunderbuss Blast"],
    },
    {
      name: "Shieldmaiden",
      skills: ["Shield Bash", "Precision Shot", "Battleaxe Cleave"],
    },
    {
      name: "Paladin",
      skills: ["Smite", "Radiant Beam", "Crusade Strike"],
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

  const validateName = (name) => {
    // Basic regex validation for character name
    const regexPattern = /^[A-Za-z ]{0,10}$/;
    if (!regexPattern.test(name)) {
      setNameError(
        "Character name can only contain letters and spaces, with a length between 3 and 10 characters."
      );
      return false; // Return false when validation fails
    } else {
      setNameError("");
      return true; // Return true when validation succeeds
    }
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    setCharacterName(name);
    const isNameValid = validateName(name); // Validate the name
    setFormValid(isNameValid && selectedCharacter && selectedSkill); // Update form validity
  };

  const handleSkillSelect = (event) => {
    const skill = event.target.value;
    setSelectedSkill(skill);
    setFormValid(validateName(characterName) && selectedCharacter && skill); // Update form validity
  };

  const handleNext = () => {
    // Validate all fields before proceeding
    if (selectedCharacter && selectedSkill && validateName(characterName)) {
      setFormValid(true);
      // Create an object to hold the data
      const characterData = {
        selectedCharacter,
        selectedSkill,
        characterName,
      };
      // Call the onNext function with the character data
      onNext(characterData);
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    handleCharacterSelect(selectedCharacter);
  }, [selectedCharacter]);

  return (
    <>
      <h2 style={{marginTop: "40px"}}>Character Creation</h2>
      <div className="form-div">
        <p>Character Name:</p>
        <input
          type="text"
          value={characterName}
          onChange={handleNameChange}
          placeholder="Enter Character Name"
          required
        />
        {/* Display validation error message if present */}
        {nameError && <p className="error-message">{nameError}</p>}
        <p>Choose your app class:</p>
        <div className="radio-buttons">
          {characters.map((char) => (
            <label key={char.name}>
              <input
                type="radio"
                name="character"
                value={char.name}
                onChange={() => handleCharacterSelect(char.name)}
                style={{ marginRight: "10px" }}
                required
              />
              {char.name}
            </label>
          ))}
        </div>
        <p>Select your character's special skill:</p>
        <select style={{width: "125px"}} value={selectedSkill} onChange={handleSkillSelect} required>
          {" "}
          <option value="">Select Skill</option>
          {characterSkills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
        <div className="character-buttons">
          {/* <button onClick={previousStep}>Previous</button> */}
          <button onClick={handleNext} disabled={!formValid}>
            Continue
          </button>{" "}
        </div>
      </div>
    </>
  );
}
