import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <div className="stats">
        <em>some thing add items 🚀</em>
      </div>
    );
  
  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packPerset = Math.round((packedItems / numOfItems) * 100);
  return (
    <div className="stats">
      <em>
        {packPerset === 100
          ? "you are everything! Ready to go ✈️"
          : `💼 You have ${numOfItems} items on your list, and you already packed
        ${packedItems} (${packPerset}%)`}
      </em>
    </div>
  );
}

export default Stats;
