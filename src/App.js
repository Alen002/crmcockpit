import "./styles/App.css";
import Metric from "./components/Metric/Metric";

function App() {
  return (
    <div className="App">
      <Metric result={24} description={"Ansprechpartner"} />
      <Metric result={100} description={"Ansprechpartner"} />
      <Metric result={24} description={"Ansprechpartner"} />
      <Metric result={24} description={"Ansprechpartner"} />
      <Metric result={24} description={"Ansprechpartner"} />
    </div>
  );
}

export default App;
