import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RoundImage = styled.img`
  border-radius: 50%;
`;

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.screen_name);
    this.props.getUserTweets(this.props.match.params.screen_name);
  }

  render() {
    const { screen_name, name } = this.props.user;
    const { userTweets } = this.props;

    return (
      <Fragment>
        <Link to="/" className="btn btn-primary mt-2 d-flex flex-row col-sm-2">
          Back Home
        </Link>
        <div className="card grid-2 mt-1">
          <div>
            <RoundImage
              src={`https://avatars.io/twitter/${screen_name}`}
              alt=""
              className="m-1"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
          </div>
        </div>

        {userTweets.map(tweet => (
          <div className="card mt-1" key={tweet.id}>
            <p>{tweet.text}</p>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default User;
