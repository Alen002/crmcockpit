import "./styles/App.css";
import Metric from "./components/Metric/Metric";
import Employee from "./components/Employee/Employee";

function App() {
  return (
    <div className="App">
      <Metric icon={"FaCodepen"} result={24} description={"Ansprechpartner"} />
      <Employee
        employeeFunction={"Vorstand"}
        employeeName={"Steven Berner"}
        employeeDepartment={"Geschäftsführung"}
        employeeCompany={"Working Energy GmbH Niederlassung am .."}
      />
    </div>
  );
}

export default App;
