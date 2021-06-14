import React from "react";
import "./Metric.css";

const Metric = ({ result, description, icon }) => {
  return (
    <div className="wrapper">
      <h1>{result}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Metric;
