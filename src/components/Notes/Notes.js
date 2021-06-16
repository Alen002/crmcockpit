import React from "react";
import "./Notes.css";
import { FaPen } from "react-icons/fa";

const Notes = () => {
  return (
    <div className="wrapper-notes">
      <div className="notes">
        <div className="notes-header">
          <h5 className="notes-header-headline">Bemerkung </h5>
          <FaPen className="notes-header-icon" />
        </div>
        <p>
          Portfolio des Kunden:
          <br />
          - Maschinen für die Pharmaindustrie
          <br />
          - Verpackungsmaschinen
          <br />
        </p>
        <p>Anzahl MA: 3.500 mit einem Umsatz von 1,5 Mrd EUR </p>
        <p>Portfolio des Kunden </p>
      </div>
    </div>
  );
};

export default Notes;
