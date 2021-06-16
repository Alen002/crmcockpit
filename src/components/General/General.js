import React from "react";
import Chart from "../Chart/Chart";
import "./General.css";
import { FaStar, FaPhone, FaFax, FaEnvelope, FaGlobe } from "react-icons/fa";

const General = () => {
  return (
    <div className="wrapper-generalinfo">
      <div className="notes-header generalinfo-headline">
        <h5 className="notes-header-headline">Forcework Machine GmbH </h5>
        <FaStar className="notes-header-icon" />
      </div>
      <div className="wrapper-generalinfos">
        <div className="wrapper-generalinfo-layout">
          <h3>Auftrag / 1015555</h3>
          <div className="generalinfo">
            <div>
              {/* <h4>Firstname</h4> */}
              <p>
                Mettlertrasse 9<br />
                60233 Frankfurt
                <br /> Germany
              </p>
              <br />
              <p>
                <FaPhone /> <a href="#">(+49) (06993) 333 3433 - 43</a>
                <br />
                <FaFax /> <a href="#">(+49) (06993) 333 3433 - 0</a>
                <br />
                <FaEnvelope /> <a href="#">info@forcework-machine.com</a>
                <br />
                <FaGlobe /> <a href="#">http://forcework-machine.com</a>
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="wrapper-generalinfo-layout">
          <h5 className="display-none">second-column</h5>
          <div className="generalinfo">
            <div>
              {/*  <h4>Secondname</h4> */}
              <ul className="">
                <li>
                  <h5>Branche</h5>
                  Maschinenbau
                </li>
                <li>
                  <h5>Suchbegriff</h5>
                  FORCEWORK MACHINE
                </li>
                <li>
                  <h5>Sprache</h5>
                  Deutsch (DE)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapper-generalinfo-layout">
          <h5>Auftragseingang/Umsatz</h5>
          <div className="generalinfo">
            <div>
              {/* <h4>Chart</h4> */}
              <Chart />
              {/* <ul className="display-none">
                <li>blank</li>
                <li>blank</li>
                <li>blank</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
