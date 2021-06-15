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

      <div className="info">
        <div className="info-general">
          <h4>{employeeName}</h4>
          <ul>
            <li>{employeeFunction}</li>
            <li>{employeeDepartment}</li>
            <li>{employeeCompany}</li>
          </ul>
          <div className="info-icons">
            <FaPhoneAlt className="info-icons-phone" />
            <FaEnvelope />
          </div>
        </div>
        <FaUserCircle className="info-icon" />
      </div>
    </div>
  );
};

export default Employee;
