import React, { Component } from "react";

export class Navbar extends Component {
  static defaultProps = {
    title: "Twitter Showcase",
    icon: "fab fa-twitter"
  };

  render() {
    return (
      <nav className="navbar bg-light">
        <h1>
          <i className={this.props.icon} />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
