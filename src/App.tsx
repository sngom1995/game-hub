import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
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
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
