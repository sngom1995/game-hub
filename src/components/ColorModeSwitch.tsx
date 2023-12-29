import React from "react";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const toggleTheme = () => {
    toggleColorMode();
  };

  return (
    <HStack>
      <Switch isChecked={isDark} onChange={toggleTheme} colorScheme="green" />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
