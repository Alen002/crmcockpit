import React from "react";
import "./Metric.css";
import { FaUserAlt } from "react-icons/fa";

const Metric = ({ result, description, icon }) => {
  return (
    <div className="wrapper">
      <FaUserAlt />
      <h1>{result}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Metric;
