import React from "react";
import Item from "./Item";

function List({ items,hansleDeletItems,hansleToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} hansleDeletItems={hansleDeletItems} hansleToggleItems={hansleToggleItems} />
        ))}
      </ul>
    </div>
  );
}

export default List;
