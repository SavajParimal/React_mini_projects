import React, { useState } from "react";
import Item from "./Item";

function List({
  items,
  hansleDeletItems,
  hansleToggleItems,
  hansleClearItems,
}) {
  const [sortItems, setSortItems] = useState("input");

  let newItems;

  if (sortItems === "input") {
    newItems = items;
  }
  if (sortItems === "description") {
    newItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortItems === "packed") {
    newItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {newItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            hansleDeletItems={hansleDeletItems}
            hansleToggleItems={hansleToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortItems}
          onChange={(e) => setSortItems(e.target.value)}
        >
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={hansleClearItems}>clear list</button>
      </div>
    </div>
  );
}

export default List;
