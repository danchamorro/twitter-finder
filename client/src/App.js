import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Tweets from "./components/tweets/Tweets";
import Search from "./components/tweets/Search";
import About from "./components/pages/About";
import Users from "./components/users/Users";

export class App extends Component {
  state = {
    tweets: [],
    users: [],
    loading: false
  };

  searchTweets = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`/tweets/${text}`);
    console.log(res.data.statuses);

    this.setState({ tweets: res.data.statuses });
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`/users/dan`);
    console.log("Users:", res.data);

    this.setState({ users: res.data });
  }

  render() {
    const { tweets, users } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar title="Twitter Showcase" icon="fab fa-twitter" />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search searchTweets={this.searchTweets} />
                    <Tweets tweets={tweets} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
            <Users users={users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
