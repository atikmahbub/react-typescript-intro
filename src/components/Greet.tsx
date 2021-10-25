import React from "react";
import { personTypes } from "./person.type"; //* Nested Types,Reusable Types Example

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: Boolean;
  person: personTypes;
  persons: personTypes[];
  testArray: (number | string)[]; //* array can be number or string array
  status: "loading" | "success" | "error"; //* only these three values are acceptable
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome to React Typescript, ${props.name}, messages: ${messageCount}`
          : "invalid user"}
      </h2>
      {props.person.firstName} {props.person.lastName}
      {props.persons.map((item) => (
        <li>
          {item.firstName} {item.lastName}
        </li>
      ))}
      {props.testArray.map((number) => (
        <li>{number}</li>
      ))}
      {props.status === "loading" && <div>Loading</div>}
    </div>
  );
};

export default Greet;
