import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Search Tweets and your Favorite Users</h1>

          <Link to="/search-tweets" className="btn btn-primary col-sm-3 m-1">
            Search Tweets
          </Link>
          <Link to="/search-users" className="btn btn-primary col-sm-3 m-1 ">
            Search Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
