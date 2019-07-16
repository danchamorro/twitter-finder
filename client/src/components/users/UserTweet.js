import React from "react";
import "./UserTweet.css";

const UserTweet = ({ user: { login, avatar_url } }) => {
  return (
    <div className="col-12">
      <li className="tweet-card mt-3">
        <div className="tweet-content">
          <div className="tweet-header">
            <span className="fullname">
              <strong>{login}</strong>
            </span>
            <span className="username">@{login}</span>
            <span className="tweet-time">- Jul 18</span>
          </div>
          <a>
            <img className="tweet-card-avatar" src={avatar_url} alt />
          </a>
          <div className="tweet-text">
            <p className lang="es" data-aria-label-part={0}>
              Tweet Will display here.
            </p>
          </div>
          <div className="tweet-footer">
            <a className="tweet-footer-btn">
              <i className="octicon octicon-comment" aria-hidden="true" />
              <span> 18</span>
            </a>
            <a className="tweet-footer-btn">
              <i className="octicon octicon-sync" aria-hidden="true" />
              <span> 64</span>
            </a>
            <a className="tweet-footer-btn">
              <i className="octicon octicon-heart" aria-hidden="true" />
              <span> 202</span>
            </a>
            <a className="tweet-footer-btn">
              <i className="octicon octicon-mail" aria-hidden="true" />
              <span> 155</span>
            </a>
          </div>
        </div>
      </li>
    </div>
  );
};

export default UserTweet;
