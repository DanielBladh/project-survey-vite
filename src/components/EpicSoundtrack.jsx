import React, { useState } from "react";

export default function EpicSoundtrack({ onSoundtrackSelect, onNext }) {
  const soundtracks = [
    " Enchanted orchestral score",
    " Swashbuckling sea shanties",
    " Space-age techno beats",
  ];
  const [selectedSoundtrack, setSelectedSoundtrack] = React.useState("");

  const handleSoundtrackSelection = (soundtrack) => {
    console.log("Epic Music: ", soundtrack)
    setSelectedSoundtrack(soundtrack);
  };
  return (
    <div className="form-div">
      <h2>Epic App Soundtrack</h2>
      <p>What musical theme should accompany your app adventure:</p>
      <div className="radio-buttons">
      {soundtracks.map((soundtrack, index) => (
        <label key={index}>
          <input
            type="radio"
            name="selectedSoundtrack"
            value={soundtrack}
            checked={selectedSoundtrack === soundtrack}
            onChange={() => handleSoundtrackSelection(soundtrack)}
          />
          {soundtrack}
        </label>
      ))}
      </div>
      <button onClick={() => onSoundtrackSelect(selectedSoundtrack)}>
        Select Soundtrack
      </button>
    </div>
  );
}
