import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
