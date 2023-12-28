import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <ButtonGroup>
      <Button colorScheme="blue">Button 1</Button>
      <Button colorScheme="teal">Button 2</Button>
      <Button colorScheme="pink">Button 3</Button>
    </ButtonGroup>
  );
}

export default App;
