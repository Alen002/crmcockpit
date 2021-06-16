import "./styles/App.css";
import Metric from "./components/Metric/Metric";
import Employee from "./components/Employee/Employee";
import Notes from "./components/Notes/Notes";
import Responsibility from "./components/Responsibility/Responsibility";
import General from "./components/General/General";
import Navbar from "./components/Navbar/Navbar";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Metric icon={"FaCodepen"} result={24} description={"Ansprechpartner"} />
      <Employee
        employeeFunction={"Vorstand"}
        employeeName={"Steven Berner"}
        employeeDepartment={"Geschäftsführung"}
        employeeCompany={"Working Energy GmbH Niederlassung am .."}
      />
      <Notes />

      <Responsibility
        employeeFirstName="Mark Forster"
        employeeSecondName="Uwe Kunz"
      />
      <General />
    </div>
  );
}

export default App;
