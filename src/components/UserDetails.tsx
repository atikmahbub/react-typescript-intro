import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserDetails = () => {
  const value = useContext(UserContext);

  const handleLogin = () => {
    value?.setUser({
      name: "Atik",
      email: "atik@gmail.com",
    });
  };

  const handleLogout = () => {
    value?.setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <div>Email:{value.user?.email}</div>
      <div>Name:{value.user?.name}</div>

      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserDetails;
