import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

export class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    // this.setState({ loading: true });

    const res = await axios.get(`/tweets/danchamorro`);
    console.log(res.data.statuses);
    console.log(res.data.statuses.user.profile_image_url);

    this.setState({ users: res.data.statuses });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <Navbar title="Twitter Showcase" icon="fab fa-twitter" />
        <div className="container">
          <Users users={users} />
        </div>
      </div>
    );
  }
}

export default App;
