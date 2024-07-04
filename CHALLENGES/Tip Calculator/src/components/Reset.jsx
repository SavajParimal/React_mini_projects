import React from "react";

function Reset({onHandleFun}) {
  return (
    <div>
      <button onClick={onHandleFun}>Reset</button>
    </div>
  );
}

export default Reset;
