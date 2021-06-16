import React from "react";
import "./Navbar.css";
import { FaXing, FaHome, FaSuitcase } from "react-icons/fa";
import userImage from "./userimage.png";

const Navbar = () => {
  return (
    <nav class="navbar">
      <a class="navbar-brand logo-color" href="#">
        <FaXing />
      </a>
      <a class="navbar-brand logo-color" href="#">
        Sales
      </a>

      <div class="navbar-left">
        <a class="nav-link" href="#">
          <FaHome />
        </a>
        <a class="nav-link" href="#">
          <FaSuitcase />
        </a>
      </div>

      <div class="navbar-right">
        <a class="nav-link nav-text" href="#">
          Kim Devon <span className="display-none">..........</span>
        </a>
      </div>

      <div class="navbar-right">
        <a class="nav-link" href="#">
          <img src={userImage} className="user-image" alt="user name" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
