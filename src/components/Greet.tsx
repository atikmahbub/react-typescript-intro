import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: Boolean;
  person: {
    firstName: string;
    lastName: string;
  };
  persons: {
    first: string;
    last: string;
  }[];
  testArray: (number | string)[];

  status: "loading" | "success" | "error";
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
          {item.first} {item.last}
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
