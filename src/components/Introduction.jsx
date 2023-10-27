import React from 'react'

export default function Introduction( {onStartSurvey}) {
    return (
        <div className="form-div">
        <h2>Welcome to the App Quest Adventure!</h2>
        <p>Your mission, should you choose to accept it, is to navigate our app's realms and provide feedback on your journey.</p>
        <button style={{marginTop: "20px"}} onClick={onStartSurvey}>Start quest</button>
      </div>
    );
  }
