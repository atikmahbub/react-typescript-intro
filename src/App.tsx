import React from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import User from "./components/User";

function App() {
  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  const persons = [
    { firstName: "test", lastName: "user" },
    { firstName: "test1", lastName: "user1" },
  ];

  const testArray = [1, 2, 3, 4, "4"];
  return (
    <div className="App">
      <Greet
        name="Atik"
        messageCount={10}
        isLoggedIn={true}
        person={person}
        persons={persons}
        testArray={testArray}
        status="success"
      />
      <Oscar>
        <Heading>place holder heading</Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />

      <Container
        styles={{ border: "1px solid red", padding: "10px" }}
        text="i am container"
      />

      <User />
    </div>
  );
}

export default App;
