import React from "react";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-light">
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Twitter Showcase",
  icon: "fab fa-twitter"
};

export default Navbar;
