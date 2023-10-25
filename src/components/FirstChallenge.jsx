import React, { useState } from "react";

export default function FirstChallenge({ onNext, characterName, character }) {
  const [storyStep, setStoryStep] = useState(1);
  const [choice, setChoice] = useState("");
  const [pathChosen, setPathChosen] = useState("");

  const handleNext = (newChoice) => {
    if (storyStep === 1) {
      setPathChosen(newChoice);
    }

    if (storyStep < 2) {
      setStoryStep(storyStep + 1);
    } else {
      onNext();
    }
  };

  const renderStory = () => {
    if (storyStep === 1) {
      return (
        <>
          <h2>The First Challenge</h2>
          <p>
            Greetings, <span style={{ color: "Red" }}>{characterName}</span> the <span style={{ color: "Red" }}>{character}</span>. As
            you step through the shimmering gateway into this mysterious realm,
            you find yourself in a place of enchanting wonders. The path ahead
            forks, presenting you with a choice that will shape your adventure.
            <br /> Which path do you choose?
          </p>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="pathChosen"
                value="MagicalForest"
                onChange={() => handleNext("MagicalForest")}
              />
              A) Venture into the magical forest.
            </label>
            <label>
              <input
                type="radio"
                name="pathChosen"
                value="Beach"
                onChange={() => handleNext("Beach")}
              />
              B) Explore the beach and pirate ship.
            </label>
            <label>
              <input
                type="radio"
                name="pathChosen"
                value="ruinsoption"
                onChange={() => handleNext("Ancient")}
              />
              C) Head towards the mystical waterfall and ancient ruins.
            </label>
          </div>
        </>
      );
    } else {
      let content = "";

      if (pathChosen === "MagicalForest") {
        content = magicalForestContent(choice);
      } else if (pathChosen === "Beach") {
        content = beachContent(choice);
      } else {
        content = ruinsContent(choice);
      }

      return content;
    }
  };

  const magicalForestContent = (choice) => {
    if (choice === "ExploreGarden") {
      // Handle the outcome for exploring the hidden garden
      return (
        <>
          <p>
            You decide to plant the magical seed in the garden. The garden
            immediately flourishes with vibrant colors, and a path opens to a
            hidden chamber. You enter the chamber and discover an ancient tome
            with magical knowledge.
          </p>
          <p>
            Congratulations, you've passed the first challenge and obtained the
            knowledge of the enchanted tome. Your journey continues.
          </p>
          <button onClick={() => handleNext("MagicalGardenReward")}>
            Next
          </button>
        </>
      );
    } else {
      // Handle the outcome for following the mysterious light
      return (
        <>
          <p>
            You follow the mysterious light deeper into the forest, and it leads
            you to an ancient tree. This tree grants you the power of nature,
            and you feel more connected to the magical forest.
          </p>
          <p>
            Congratulations, you've passed the first challenge and gained the
            power of the forest. Your journey continues.
          </p>
          <button onClick={() => handleNext("MagicalForestPower")}>Next</button>
        </>
      );
    }
  };

  const beachContent = (choice) => {
    if (choice === "SearchPirateShip") {
      // Handle outcome for searching the pirate ship
      return (
        <>
          <p>
            You decide to search the pirate ship, and you find a hidden chest
            filled with gold coins. You are now wealthier than you could have
            imagined.
          </p>
          <p>
            Congratulations, you've passed the first challenge and acquired a
            chest of gold coins. Your journey continues.
          </p>
          <button onClick={() => handleNext("PirateShipTreasure")}>Next</button>
        </>
      );
    } else {
      // Handle outcome for exploring the caves
      return (
        <>
          <p>
            You explore the caves by the beach and find a hidden treasure trove.
            It's full of valuable artifacts and gems.
          </p>
          <p>
            Congratulations, you've passed the first challenge and discovered a
            treasure trove. Your journey continues.
          </p>
          <button onClick={() => handleNext("CaveTreasures")}>Next</button>
        </>
      );
    }
  };

  const ruinsContent = (choice) => {
    if (choice === "ExamineRuins") {
      // Handle outcome for examining the ancient ruins
      return (
        <>
          <p>
            As you examine the ancient ruins, you decipher an ancient script
            that bestows you with ancient wisdom and knowledge.
          </p>
          <p>
            Congratulations, you've passed the first challenge and acquired
            ancient wisdom. Your journey continues.
          </p>
          <button onClick={() => handleNext("AncientWisdom")}>Next</button>
        </>
      );
    } else {
      // Handle outcome for approaching the magical waterfall
      return (
        <>
          <p>
            As you approach the magical waterfall, you feel a surge of mystical
            energy. The waterfall imparts its magic to you, enhancing your
            magical abilities.
          </p>
          <p>
            Congratulations, you've passed the first challenge and gained
            enhanced magical abilities. Your journey continues.
          </p>
          <button onClick={() => handleNext("EnhancedMagic")}>Next</button>
        </>
      );
    }
  };

  return <div className="form-div">{renderStory()}</div>;
}
