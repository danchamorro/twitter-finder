import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Tweets from "./components/tweets/Tweets";

export class App extends Component {
  state = {
    tweets: []
  };

  async componentDidMount() {
    // this.setState({ loading: true });

    const res = await axios.get(`/tweets/danchamorro`);
    console.log(res.data.statuses);

    this.setState({ tweets: res.data.statuses });
  }

  render() {
    const { tweets } = this.state;
    return (
      <div className="App">
        <Navbar title="Twitter Showcase" icon="fab fa-twitter" />
        <div className="container">
          <Tweets tweets={tweets} />
        </div>
      </div>
    );
  }
}

export default App;
