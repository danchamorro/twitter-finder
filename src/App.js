import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Twitter Showcase" icon="fab fa-twitter" />
      </div>
    );
  }
}

export default App;
