import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Twitter Showcase" icon="fab fa-twitter" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
