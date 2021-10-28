import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const value = useContext(ThemeContext);

  return <div style={{ color: value.primary.color }}>Hello sdsdsd</div>;
};

export default Box;
