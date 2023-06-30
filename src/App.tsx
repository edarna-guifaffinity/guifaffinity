import "./App.css";
import { HomeList } from "./components/home-list";
import { Searcher } from "./components/searcher/Searcher";
import { Title } from "./components/title/Title";

function App() {
  return (
    <>
      <Title />
      <Searcher />
      <HomeList />
    </>
  );
}

export default App;
