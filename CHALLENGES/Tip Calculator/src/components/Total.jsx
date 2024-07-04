import React from "react";

function Total({ price, dis1, dis2 }) {
  const totalDis = (price * ((dis1 + dis2) / 2)) / 100;
  const total = price + totalDis;
  return (
    <div>
      <strong>
        You pay ${total} (${dis1} + ${dis2} tip)
      </strong>
    </div>
  );
}

export default Total;
