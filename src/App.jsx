import React, { useState } from "react";
import Introduction from "./components/Introduction";
import CharacterSelection from "./components/CharacterSelection";
import FirstChallenge from "./components/FirstChallenge";
import QuestRewards from "./components/QuestRewards";
import MysteriousRiddles from "./components/MysteriousRiddles";
import BossBattle from "./components/BossBattle";
import EpicSoundtrack from "./components/EpicSoundtrack";
import AppJourneyReflection from "./components/AppJourneyReflection";
import Summary from "./components/Summary"; // Import the Summary component
import parchmentPaper from "./assets/parchmentPaper.png";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [firstImpression, setFirstImpression] = useState("");
  const [reward, setReward] = useState("");
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState("");
  const [selectedSoundtrack, setSelectedSoundtrack] = useState("");
  const [reflection, setReflection] = useState("");
  const [appQuestAchievement, setAppQuestAchievement] = useState("");
  const surveyImages = ["image1.jpg", "image2.jpg", "image3.jpg"];

  const handleCharacterSelect = (character, name, skill) => {
    setCharacter(character);
    setCharacterName(name); // Set character name
    setSelectedSkill(skill); // Set selectedSkill
    nextStep();
  };

  const handleFirstImpressionSelect = (impression) => {
    setFirstImpression(impression);
    nextStep();
  };

  const handleRewardSelect = (selectedReward) => {
    setReward(selectedReward);
    nextStep();
  };

  const handleRiddleAnswer = (answer) => {
    setRiddleAnswer(answer);
    nextStep();
  };

  const handleWeaponSelect = (weapon) => {
    setSelectedWeapon(weapon);
    nextStep();
  };

  const handleSoundtrackSelect = (soundtrack) => {
    setSelectedSoundtrack(soundtrack);
    nextStep();
  };

  const handleReflection = (text) => {
    setReflection(text);
    nextStep();
  };

  const handleSurveyCompletion = (achievement) => {
    setAppQuestAchievement(achievement);
    nextStep();
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setSurveyProgress((currentStep + 1) * 12.5);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    setSurveyProgress((currentStep - 1) * 12.5);
  };

  const [surveyProgress, setSurveyProgress] = useState(0);

  return (
    <section className="story-container">
      <img src={parchmentPaper} className="paper-img" alt="parchment paper" />
      <div className="progress-container">
        <progress value={surveyProgress} max="100"></progress>
        <span className="step-label">Step {currentStep} of 8</span>
      </div>
      <div className="side-in-book">
        {currentStep === 0 && <Introduction onStartSurvey={nextStep} />}
        {currentStep === 1 && (
          <CharacterSelection
            onNext={(characterData) =>
              handleCharacterSelect(
                characterData.selectedCharacter,
                characterData.characterName,
                characterData.selectedSkill
              )
            }
            previousStep={previousStep}
          />
        )}
        {currentStep === 2 && (
          <FirstChallenge
            onNext={nextStep}
            onFirstImpressionSelect={handleFirstImpressionSelect}
            characterName={characterName}
            character={character}
            previousStep={previousStep}
            firstImpression={firstImpression} // Pass the firstImpression prop
          />
        )}
        {currentStep === 3 && (
          <QuestRewards onNext={nextStep} onRewardSelect={handleRewardSelect} />
        )}
        {currentStep === 4 && (
          <MysteriousRiddles
            onNext={nextStep}
            onRiddleAnswer={handleRiddleAnswer}
            selectedReward={reward} // Pass selectedReward here, not handleRewardSelect
          />
        )}
        {currentStep === 5 && (
          <BossBattle onNext={nextStep} onWeaponSelect={handleWeaponSelect} />
        )}
        {currentStep === 6 && (
          <EpicSoundtrack
            onNext={nextStep}
            onSoundtrackSelect={handleSoundtrackSelect}
          />
        )}
        {currentStep === 7 && (
          <AppJourneyReflection
            onNext={nextStep}
            onReflection={handleReflection}
          />
        )}
        {currentStep === 8 && (
          <Summary
            appQuestAchievement={appQuestAchievement}
            character={character}
            characterName={characterName}
            selectedSkill={selectedSkill} // Pass selectedSkill to Summary
            firstImpression={firstImpression}
            reward={reward}
            riddleAnswer={riddleAnswer}
            selectedWeapon={selectedWeapon}
            selectedSoundtrack={selectedSoundtrack}
            reflection={reflection}
          />
        )}
      </div>
    </section>
  );
}
