import "./styles/App.css";
import Metric from "./components/Metric/Metric";

function App() {
  return (
    <div className="App">
      <Metric icon={"FaCodepen"} result={24} description={"Ansprechpartner"} />
    </div>
  );
}

export default App;
