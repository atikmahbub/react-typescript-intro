import React from "react";

type containerTypes = {
  styles: React.CSSProperties;
  text: string;
};

const Container = (props: containerTypes) => {
  return <div style={props.styles}>{props.text}</div>;
};

export default Container;
