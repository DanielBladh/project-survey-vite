import React, { useState } from "react";

export default function FirstChallenge({ onNext, characterName, character }) {
  const [storyStep, setStoryStep] = useState(1);
  const [choice, setChoice] = useState("");

  const handleNext = () => {
    if (storyStep === 1 && choice !== "") {
      setStoryStep(storyStep + 1);
    } else if (storyStep === 2) {
      onNext(); 
    }
  };

  const handleChoiceChange = (newChoice) => {
    setChoice(newChoice);
  };

  const renderStory = () => {
    if (storyStep === 1) {
      return (
        <>
          <h2>The First Challenge</h2>
          <p>
            Greetings, <span style={{ color: "Red" }}>{characterName}</span> the{" "}
            <span style={{ color: "Red" }}>{character}</span>. As you step
            through the shimmering gateway into this mysterious realm, you find
            yourself in a place of enchanting wonders. The path ahead forks,
            presenting you with a choice that will shape your adventure.
            <br /> Which path do you choose?
          </p>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="pathChosen"
                value="MagicalForest"
                onChange={() => handleChoiceChange("MagicalForest")}
              />
              A) Venture into the magical forest.
            </label>
            <label>
              <input
                type="radio"
                name="pathChosen"
                value="Beach"
                onChange={() => handleChoiceChange("Beach")}
              />
              B) Explore the beach and pirate ship.
            </label>
            <label>
              <input
                type="radio"
                name="pathChosen"
                value="Ancient"
                onChange={() => handleChoiceChange("Ancient")}
              />
              C) Head towards the mystical ancient ruins.
            </label>
          </div>
          <button onClick={handleNext} disabled={choice === ""}>
            Continue
          </button>
        </>
      );
    } else if (storyStep === 2) {
      // Display content based on the user's choice
      if (choice === "MagicalForest") {
        return magicalForestContent();
      } else if (choice === "Beach") {
        return beachContent();
      } else if (choice === "Ancient") {
        return ruinsContent();
      }
    }
    return null;
  };

  const magicalForestContent = () => (
    <>
      <p>
        You decide to plant the magical seed in the garden. The garden
        immediately flourishes with vibrant colors, and a path opens to a hidden
        chamber. You enter the chamber and discover an ancient tome with magical
        knowledge.
      </p>
      <p style={{color: "rgb(112, 1, 1)"}}>
        Congratulations, you've passed the first challenge and obtained the
        knowledge of the enchanted tome. Your journey continues.
      </p>
      <NextButton />
    </>
  );

  const beachContent = () => (
    <>
      <p>
        You explore the caves by the beach and find a hidden treasure trove.
        It's full of valuable artifacts and gems.
      </p>
      <p style={{color: "rgb(112, 1, 1)"}}>
        Congratulations, you've passed the first challenge and discovered a
        treasure trove. Your journey continues.
      </p>
      <NextButton />
    </>
  );

  const ruinsContent = () => (
    <>
      <p>
        As you examine the ancient ruins, you decipher an ancient script that
        bestows you with ancient wisdom and knowledge.
      </p>
      <p style={{color: "rgb(112, 1, 1)"}}>
        Congratulations, you've passed the first challenge and acquired ancient
        wisdom. Your journey continues.
      </p>
      <NextButton />
    </>
  );

  const NextButton = () => <button onClick={handleNext}>Continue</button>;

  return <div className="form-div">{renderStory()}</div>;
}
