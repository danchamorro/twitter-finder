import React from "react";
import Tweet from "./Tweet";

const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem"
// };

export default Tweets;
