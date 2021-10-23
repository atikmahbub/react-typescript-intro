import React from "react";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  const persons = [
    { first: "test", last: "user" },
    { first: "test1", last: "user1" },
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
    </div>
  );
}

export default App;
