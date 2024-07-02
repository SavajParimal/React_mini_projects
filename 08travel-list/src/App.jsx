import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import "./index.css";

function App() {
  const [items, setItem] = useState([]);

  function hansleItems(item) {
    setItem((itemms) => [...itemms, item]);
  }

  function hansleDeletItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function hansleToggleItems(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form hansleItems={hansleItems} />
        <List items={items} hansleDeletItems={hansleDeletItems} hansleToggleItems={hansleToggleItems} />
        <Stats />
      </div>
    </>
  );
}

export default App;
