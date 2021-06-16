import React from "react";
import "./Notes.css";
import { FaPen } from "react-icons/fa";

const Notes = () => {
  return (
    <div className="wrapper-notes">
      <div className="notes">
        <div className="notes-header">
          <h5 className="notes-header-headline">Zuständigkeit </h5>
          <FaPen className="notes-header-icon" />
        </div>
      </div>
    </div>
  );
};

export default Notes;
