import React from "react";

function Bill({ price, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={price}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

export default Bill;
