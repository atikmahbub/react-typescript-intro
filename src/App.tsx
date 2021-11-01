import React from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import Container from "./components/Container";
import { Counter } from "./components/Counter";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import { ThemeContextProvider } from "./components/ThemeContext";
import User from "./components/User";
import { UserContextProvider } from "./components/UserContext";
import UserDetails from "./components/UserDetails";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import CheckNumber from "./components/retricts/CheckNumber";
import Toast from "./components/templateliterals/Toast";
import Text from "./components/polymorphic/Text";
import CustomButton from "./components/wrappinghtml/Button";
import CounterComponent from "./components/renderProps/CounterComponent";
import { count } from "console";

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

      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <UserDetails />
      </UserContextProvider>

      <DomRef />
      <MutableRef />

      <Private isLoggedIn={true} Component={Profile} />
      {/* 
      <List list={[1, 2, 3, 4, 4]} onClick={() => console.log("ss")} />
      <List list={["sd", "sd", "qsa"]} onClick={() => console.log("ss")} /> */}
      <List
        list={[
          { id: 1, first: "ss", last: "sds" },
          { id: 2, first: "sds", last: "sdsdsd" },
        ]}
        onClick={() => console.log("ss")}
      />

      <CheckNumber value={10} isPositive />

      <Toast position="bottom-center" />

      <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton>

      <Text as="h1" size="sm">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" color="secondary">
        Label
      </Text>

      <CounterComponent>
        {(count, setCount) => {
          return (
            <div>
              {count}
              <button onClick={() => setCount((count) => count + 1)}>
                Increment
              </button>
            </div>
          );
        }}
      </CounterComponent>
    </div>
  );
}

export default App;
