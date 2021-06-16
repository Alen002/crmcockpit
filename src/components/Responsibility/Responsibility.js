import React from "react";
import "./Responsibility.css";
import { FaUserCircle, FaPen } from "react-icons/fa";

const Responsibility = ({ employeeName }) => {
  return (
    <div className="wrapper-responsibility">
      <div className="notes-header">
        <h5 className="notes-header-headline">Zuständigkeit </h5>
        <FaPen className="notes-header-icon" />
      </div>
      <h5>Zuständige Mitarb.</h5>

      <div className="employee">
        <div className="employee-general-green">
          <h4>{employeeName}</h4>
          <ul className="display-none">
            <li>blank</li>
            <li>blank</li>
            <li>blank</li>
          </ul>
        </div>
        <FaUserCircle className="employee-icon icon-green" />
      </div>
    </div>
  );
};

export default Responsibility;
