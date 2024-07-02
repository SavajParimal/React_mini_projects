import React from "react";

export default function Item({ item,hansleDeletItems,hansleToggleItems }) {
  return (
    <li>
      <input type="checkbox" onChange={()=>hansleToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={()=>hansleDeletItems(item.id)}>❌</button>
    </li>
  );
}
