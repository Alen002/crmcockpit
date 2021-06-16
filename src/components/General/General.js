import React from "react";
import "./General.css";
import {
  FaPen,
  FaStar,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaGlobe,
  FaUserCircle,
} from "react-icons/fa";

const General = () => {
  return (
    <div className="wrapper-generalinfo">
      <div className="notes-header">
        <h5 className="notes-header-headline">Forcework Machine Gmbh </h5>
        <FaStar className="notes-header-icon" />
      </div>
      <div className="wrapper-generalinfos">
        <div className="wrapper-generalinfo-layout">
          <h5>Zuständige Mitarb.</h5>
          <div className="generalinfo">
            <div className="generalinfo-general-green">
              <h4>Firstname</h4>
              <ul className="display-none">
                <li>blank</li>
                <li>blank</li>
                <li>blank</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapper-generalinfo-layout">
          <h5>Zuständige Mitarb.</h5>
          <div className="generalinfo">
            <div className="generalinfo-general-green">
              <h4>Secondname</h4>
              <ul className="display-none">
                <li>blank</li>
                <li>blank</li>
                <li>blank</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
