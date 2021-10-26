import React, { useState } from "react";

type authUserType = {
  user: string;
  email: string;
};

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<authUserType | null>(null); //* can be null or object , need to ? after state value

  const [array, setArray] = useState<(string | number)[]>();
  //   const [user, setUser] = useState({} as authUserType); //* if sure that user will be authUserType after mounted

  const handleLogIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoggedIn(!isLoggedIn);
    setUser({
      user: "Atik",
      email: "atik@gmail.com",
    });
    setArray(["ss", "sss", "dd", 4]);
  };

  return (
    <div>
      user is {isLoggedIn ? "Logged In" : "Logged Out"}
      <button onClick={handleLogIn}>{isLoggedIn ? "Log Out" : "Log In"}</button>
      user name {user?.user}
      user email {user?.email}
      {array?.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default User;
