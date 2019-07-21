import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  text-align: center;
`;

const RoundImage = styled.img`
  border-radius: 50%;
`;

const UserItem = ({ user: { profile_image_url, name, screen_name } }) => {
  return (
    <Card>
      <RoundImage
        src={`https://avatars.io/twitter/${screen_name}`}
        alt=""
        style={{ width: "60px" }}
      />
      <h3>{name}</h3>
      <Link to={`/user/${screen_name}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </Card>
  );
};

export default UserItem;
