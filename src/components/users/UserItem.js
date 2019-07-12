import React from "react";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card mt-3">
      <img src={avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{login}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href={html_url} className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
