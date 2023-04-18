import "./App.css";
import { BottomBar } from "./components/BottomBar";
import { PokeList } from "./components/PokeList";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <PokeList />
      <BottomBar />
    </>
  );
}

export default App;
