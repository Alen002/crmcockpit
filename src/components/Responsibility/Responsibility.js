import React from "react";
import "./Responsibility.css";
import { FaUserCircle, FaPen } from "react-icons/fa";

const Responsibility = ({ employeeFirstName, employeeSecondName }) => {
  return (
    <div className="wrapper-responsibility">
      <div className="notes-header">
        <h5 className="notes-header-headline">Zuständigkeit </h5>
        <FaPen className="notes-header-icon" />
      </div>
      <div className="wrapper-employees">
        <div className="wrapper-employee-layout">
          <h5>Zuständige Mitarb.</h5>
          <div className="employee">
            <div className="employee-general-green">
              <h4>{employeeFirstName}</h4>
              <ul className="display-none">
                <li>blank</li>
                <li>blank</li>
                <li>blank</li>
              </ul>
            </div>
            <FaUserCircle className="employee-icon icon-green" />
          </div>
        </div>
        <div className="wrapper-employee-layout">
          <h5>Zuständige Mitarb.</h5>
          <div className="employee">
            <div className="employee-general-green">
              <h4>{employeeSecondName}</h4>
              <ul className="display-none">
                <li>blank</li>
                <li>blank</li>
                <li>blank</li>
              </ul>
            </div>
            <FaUserCircle className="employee-icon icon-green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
