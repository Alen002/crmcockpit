import React from "react";
import "./Employee.css";
import { FaUserCircle, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Employee = ({
  employeeFunction,
  employeeName,
  employeeDepartment,
  employeeCompany,
}) => {
  return (
    <div className="wrapper-employee">
      <h5>{employeeFunction}</h5>

      <div className="employee">
        <div className="employee-general">
          <h4>{employeeName}</h4>
          <ul>
            <li>{employeeFunction}</li>
            <li>{employeeDepartment}</li>
            <li>{employeeCompany}</li>
          </ul>
          <div className="employee-icons">
            <FaPhoneAlt className="employee-icons-phone" />
            <FaEnvelope className="employee-icons-envelope" />
          </div>
        </div>
        <FaUserCircle className="employee-icon" />
      </div>
    </div>
  );
};

export default Employee;
