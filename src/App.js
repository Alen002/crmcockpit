import "./styles/App.css";
import Metric from "./components/Metric/Metric";
import Employee from "./components/Employee/Employee";
import Notes from "./components/Notes/Notes";
import Responsibility from "./components/Responsibility/Responsibility";
import General from "./components/General/General";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-wrapper">
        <General />
        <Metric
          icon={"FaCodepen"}
          result={24}
          description={"Ansprechpartner"}
        />
        <Metric
          icon={"FaCodepen"}
          result={24}
          description={"Ansprechpartner"}
        />
        <Metric
          icon={"FaCodepen"}
          result={24}
          description={"Ansprechpartner"}
        />
        <Metric
          icon={"FaCodepen"}
          result={24}
          description={"Ansprechpartner"}
        />
        <Metric
          icon={"FaCodepen"}
          result={24}
          description={"Ansprechpartner"}
        />
        <Responsibility
          employeeFirstName="Mark Forster"
          employeeSecondName="Uwe Kunz"
        />

        <Notes />
        <div className="wrapper-responsive-employee">
          <Employee
            employeeFunction={"Vorstand"}
            employeeName={"Steven Berner"}
            employeeDepartment={"Geschäftsführung"}
            employeeCompany={"Working Energy GmbH Niederlassung am .."}
          />
          <Employee
            employeeFunction={"Mitarbeiter"}
            employeeName={"Dave Maier"}
            employeeDepartment={"Einkauf"}
            employeeCompany={"Working Energy GmbH Niederlassung am .."}
          />
          <Employee
            employeeFunction={"Leiter Einkauf"}
            employeeName={"Kim Devon"}
            employeeDepartment={"Einkauf"}
            employeeCompany={"Working Energy GmbH Niederlassung am .."}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
