import React from "react";

export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Your Profile , name : {name}</div>;
};

export default Profile;
