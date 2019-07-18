import React from "react";
import "./UserTweet.css";

const UserTweet = ({ user: { text } }) => {
  return (
    <div className="col-12">
      <li className="tweet-card mt-3">
        <div className="tweet-content">
          <div className="tweet-header">
            <span className="fullname">
              <strong>Login</strong>
            </span>
            <span className="username">@Login</span>
            <span className="tweet-time">- Jul 18</span>
          </div>
          <div>
            <img className="tweet-card-avatar" src="#" alt="" />
          </div>
          <div className="tweet-text">
            <p>{text}</p>
          </div>
          <div className="tweet-footer">
            <div className="tweet-footer-btn">
              <i className="octicon octicon-comment" aria-hidden="true" />
              <span> 18</span>
            </div>
            <div className="tweet-footer-btn">
              <i className="octicon octicon-sync" aria-hidden="true" />
              <span> 64</span>
            </div>
            <div className="tweet-footer-btn">
              <i className="octicon octicon-heart" aria-hidden="true" />
              <span> 202</span>
            </div>
            <div className="tweet-footer-btn">
              <i className="octicon octicon-mail" aria-hidden="true" />
              <span> 155</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default UserTweet;
