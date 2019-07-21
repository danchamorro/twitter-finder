import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Tweets from "./components/tweets/Tweets";
import SearchTweets from "./components/tweets/SearchTweets";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import Home from "./components/pages/Home";
import SearchUsers from "./components/users/SearchUsers";
import User from "./components/users/User";

export class App extends Component {
  state = {
    tweets: [],
    users: [],
    user: {},
    loading: false
  };

  searchTweets = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`/tweets/${text}`);

    this.setState({ tweets: res.data.statuses });
  };

  searchUsers = async username => {
    this.setState({ loading: true });

    const res = await axios.get(`/users/${username}`);

    this.setState({ users: res.data });
  };

  // Get single user
  getUser = async screenname => {
    this.setState({ loading: true });

    const res = await axios.get(`/user/${screenname}`);
    console.log("screen name:", res.data[0].screen_name);

    this.setState({ user: res.data[0] });
  };

  render() {
    const { tweets, users, user } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar title="Twitter Showcase" icon="fab fa-twitter" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                exact
                path="/search-tweets"
                render={props => (
                  <Fragment>
                    <SearchTweets searchTweets={this.searchTweets} />
                    <Tweets tweets={tweets} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/search-users"
                render={props => (
                  <Fragment>
                    <SearchUsers searchUsers={this.searchUsers} />
                    <Users users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:screen_name"
                render={props => (
                  <User {...props} getUser={this.getUser} user={user} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
