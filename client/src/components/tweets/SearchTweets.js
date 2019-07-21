import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class SearchTweets extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.searchTweets(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <Fragment>
          <Link
            to="/"
            className="btn btn-primary mt-2 d-flex flex-row col-sm-2"
          >
            Back Home
          </Link>
        </Fragment>
        <form className="form mt-1" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Tweets..."
            value={this.state.text}
            onChange={this.onChange}
            className="form-control"
          />
          <button
            type="submit"
            value="Search"
            className="btn btn-dark btn-block mt-1"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchTweets;
