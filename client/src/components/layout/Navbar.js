import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom  ">
      <h1 className="navbar-brand">
        <i className={icon} />
        {title}
      </h1>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-5">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Twitter Showcase",
  icon: "fab fa-twitter"
};

export default Navbar;
