import React from "react";

function Roles({handleShowRules}) {
  return (
    <>
      <div className="show-rules">
        <span onClick={handleShowRules}>&#10005;</span>
        <h4>How to play dice game</h4>

        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </>
  );
}

export default Roles;
