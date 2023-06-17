import "./App.css";
import { Detail } from "./components/detail/Detail";
import { HomeList } from "./components/home-list";

function App() {
  return (
    <div className="app-container">
      <Detail />
      <HomeList />
    </div>
  );
}

export default App;
