import React from "react";
import Greet from "../Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  //* We can access type from greet component
  return <div>{props.name}</div>;
};

export default CustomComponent;
