import React, { useState } from "react";
import dice_5 from "../assets/dice/five.png";
import dice_4 from "../assets/dice/four.png";
import dice_3 from "../assets/dice/three.png";
import dice_2 from "../assets/dice/two.png";
import dice_1 from "../assets/dice/one.png";
import dice_6 from "../assets/dice/six.png";
import Roles from "./Roles";
import Error from "./Error";

function Game() {
  const [userNumber, setUserNumber] = useState(null);
  const [selectNumber, setSelectNumber] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showRoles, setShowRoles] = useState(false);
  const [rolesText, setRolesText] = useState("Show");
  const [randomImg, setRandomImg] = useState(dice_1);
  const [score, setScore] = useState(0);

  const handleNumber = (e) => {
    const value = Number(e.target.value);
    setUserNumber(value);
    setSelectNumber(true);
    setShowError(false);
  };

  function handleShowRules() {
    setShowRoles((curr) => !curr);
    setRolesText((prev) => (prev === "Show" ? "Hide" : "Show"));
  }

  function handleScore(number) {
    if (number === userNumber) {
      setScore((curr) => curr + userNumber);
    } else {
      setScore((curr) => curr - 2);
    }
  }

  function handleDiceRoll() {
    if (!selectNumber) {
      setShowError(true);
      return;
    }
    const imageURL = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
    const randomNumber = Math.floor(Math.random() * imageURL.length);
    setRandomImg(imageURL[randomNumber]);
    handleScore(randomNumber + 1);
  }

  function handleReset() {
    setUserNumber(null);
    setSelectNumber(false);
    setShowError(false);
    setShowRoles(false);
    setRolesText("Show");
    setRandomImg(dice_1);
    setScore(0); // Reset the score to 0
  }

  return (
    <div className="game" id="gameSection">
      <div className="toper">
        <div className="score">
          <span className="number">{score}</span>
          <span className="number-text">Total Score</span>
        </div>
        <div className="select-number">
          <div className="right">
            <button
              className={userNumber === 1 ? "btns selected" : "btns"}
              value="1"
              onClick={handleNumber}
            >
              1
            </button>
            <button
              className={userNumber === 2 ? "btns selected" : "btns"}
              value="2"
              onClick={handleNumber}
            >
              2
            </button>
            <button
              className={userNumber === 3 ? "btns selected" : "btns"}
              value="3"
              onClick={handleNumber}
            >
              3
            </button>
            <button
              className={userNumber === 4 ? "btns selected" : "btns"}
              value="4"
              onClick={handleNumber}
            >
              4
            </button>
            <button
              className={userNumber === 5 ? "btns selected" : "btns"}
              value="5"
              onClick={handleNumber}
            >
              5
            </button>
            <button
              className={userNumber === 6 ? "btns selected" : "btns"}
              value="6"
              onClick={handleNumber}
            >
              6
            </button>
          </div>
          <div>
            <span className="select-text">Select Number</span>
          </div>
        </div>
      </div>
      <div className="dice">
        <div className="roll">
          <img src={randomImg} alt="one" onClick={handleDiceRoll} />
          <div className="dice-text">Click on Dice to roll</div>
        </div>
        <div className="button">
          <button className="reset" onClick={handleReset}>
            Reset Score
          </button>
          <button className="rules" onClick={handleShowRules}>
            {rolesText} Rules
          </button>
        </div>
      </div>
      {showRoles && (
        <div className="display-roles">
          <Roles handleShowRules={handleShowRules} />
        </div>
      )}
      {showError && <Error />}
    </div>
  );
}

export default Game;
