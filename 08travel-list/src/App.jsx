import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import "./index.css";

function App() {
  const [items, setItem] = useState([]);

  function hansleItems(item) {
    console.log("this is App", item);
    setItem((itemms) => [...itemms, item]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form hansleItems={hansleItems} />
        <List items={items} />
        <Stats />
      </div>
    </>
  );
}

export default App;
