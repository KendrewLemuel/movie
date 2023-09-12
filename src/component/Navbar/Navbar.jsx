import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="head-wrapper">
      <div className="head-container">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <ul className="head-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Popular">Popular</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
