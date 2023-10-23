import React, { useState } from "react";

export default function BossBattle({ onWeaponSelect, onNext }) {
  const weapons = [" Magic Staff", " Cutlass", " Laser Blaster", " Crossbow"];
  const [selectedWeapon, setSelectedWeapon] = React.useState("");

  const handleWeaponSelection = (weapon) => {
    console.log("Weapon Choice: ", weapon)
    setSelectedWeapon(weapon);
  };

  return (
    <div className="form-div">
      <h2>The Boss Battle</h2>
      <p>At the heart of the app, you face the final boss.</p>
      <p>Which epic weapon would you choose:</p>
      <div className="radio-buttons">
      {weapons.map((weapon, index) => (
        <label key={index}>
          <input
            type="radio"
            name="selectedWeapon"
            value={weapon}
            checked={selectedWeapon === weapon}
            onChange={() => handleWeaponSelection(weapon)}
          />
          {weapon}
        </label>
      ))}
      </div>
      <button onClick={() => onWeaponSelect(selectedWeapon)}>
        Select Weapon
      </button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}
