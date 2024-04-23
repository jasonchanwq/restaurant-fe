import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="50px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <HStack spacing={6}>
        <Text>Navigation Bar Component</Text>
        <Text>Button</Text>
        <Text>Button</Text>
        <Text>Button</Text>
        <Text>Button</Text>
        <Text>Button</Text>
        <Text>Button</Text>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
