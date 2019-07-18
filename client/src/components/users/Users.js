import React from "react";
import UserTweet from "./UserTweet";

const Users = ({ users }) => {
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserTweet key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
