import Form from "./components/Form";
import List from "./components/List";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import "./index.css";

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <List />
        <Stats />
      </div>
    </>
  );
}

export default App;
