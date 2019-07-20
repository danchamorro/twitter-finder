import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  text-align: center;
`;

const RoundImage = styled.img`
  border-radius: 50%;
`;

const UserItem = ({ user: { profile_image_url, name } }) => {
  console.log(profile_image_url);
  return (
    <Card>
      <RoundImage src={profile_image_url} alt="" style={{ width: "60px" }} />
      <h3>{name}</h3>
      <button className="btn btn-dark btn-sm my-1">More</button>
    </Card>
  );
};

export default UserItem;
