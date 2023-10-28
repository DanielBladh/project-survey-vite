import React, { useState, useEffect, useRef } from "react";
import Introduction from "./components/Introduction";
import CharacterSelection from "./components/CharacterSelection";
import FirstChallenge from "./components/FirstChallenge";
import QuestRewards from "./components/QuestRewards";
import MysteriousRiddles from "./components/MysteriousRiddles";
import BossBattle from "./components/BossBattle";
import QuestImprovements from "./components/QuestImprovements";
import AppJourneyReflection from "./components/AppJourneyReflection";
import Summary from "./components/Summary";
import parchmentPaper from "./assets/parchmentPaper.png";
import townMusic from "./assets/townMusic.mp3";
import soundOnIcon from "./assets/soundOn.png";
import soundOffIcon from "./assets/soundOff.png";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [character, setCharacter] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [reward, setReward] = useState("");
  const [riddleAnswer, setRiddleAnswer] = useState("");
  const [newNarrative, setNewNarrative] = useState("");
  const [improvements, setImprovements] = useState("");
  const [reflection, setReflection] = useState("");
  const surveyImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
  const audioRef = useRef(null);
  const [buttonText, setButtonText] = useState("Play Sound");
  const [buttonIcon, setButtonIcon] = useState(soundOffIcon);

  const handleCharacterSelect = (character, name, skill) => {
    setCharacter(character);
    setCharacterName(name);
    setSelectedSkill(skill);
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

  const handleImprovementsSubmit = (userImprovements) => {
    setImprovements(userImprovements);
  };

  const handleReflection = (text) => {
    setReflection(text);
    nextStep();
  };

  const handleSurveyCompletion = (newNarrative) => {
    setNewNarrative(newNarrative);
    nextStep();
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setSurveyProgress((currentStep + 1) * 12.5);
  };

  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    if (!audioRef.current.paused) {
      setIsSoundOn(true);
    } else {
      setIsSoundOn(false);
    }
  }, []);

  const toggleSound = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setButtonText("Stop Sound");
      setButtonIcon(soundOnIcon);
      setIsSoundOn(true);
    } else {
      audioRef.current.pause();
      setButtonText("Play Sound");
      setButtonIcon(soundOffIcon);
      setIsSoundOn(false);
    }
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
    setSurveyProgress((currentStep - 1) * 12.5);
  };

  const [surveyProgress, setSurveyProgress] = useState(0);

  return (
    <section className="story-container">
      <div className="progress-container">
        <progress value={surveyProgress} max="100"></progress>
        <span className="step-label">Step {currentStep} of 8</span>
      </div>
      <img src={parchmentPaper} className="paper-img" alt="parchment paper" />
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
            selectedSkill={selectedSkill}
            previousStep={previousStep}
          />
        )}
        {currentStep === 2 && (
          <FirstChallenge
            onNext={nextStep}
            characterName={characterName}
            character={character}
            previousStep={previousStep}
          />
        )}
        {currentStep === 3 && (
          <QuestRewards onNext={nextStep} onRewardSelect={handleRewardSelect} />
        )}
        {currentStep === 4 && (
          <MysteriousRiddles
            onNext={nextStep}
            onRiddleAnswer={handleRiddleAnswer}
            selectedReward={reward}
          />
        )}
        {currentStep === 5 && (
          <BossBattle
            onNext={handleSurveyCompletion}
            selectedReward={reward}
            selectedSkill={selectedSkill}
          />
        )}
        {currentStep === 6 && (
          <QuestImprovements
            onNext={nextStep}
            onImprovementsSubmit={handleImprovementsSubmit}
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
            character={character}
            characterName={characterName}
            selectedSkill={selectedSkill}
            reward={reward}
            riddleAnswer={riddleAnswer}
            newNarrative={newNarrative}
            improvements={improvements}
            reflection={reflection}
          />
        )}
      </div>
      <audio ref={audioRef}>
        <source src={townMusic} type="audio/wav" />
      </audio>
      <div className="sound-control">
        <button className="soundButton" onClick={toggleSound}>
          <img src={buttonIcon} alt="Sound Icon" />
          {isSoundOn ? "Stop Sound" : "Play Sound"}
        </button>
      </div>
    </section>
  );
}
