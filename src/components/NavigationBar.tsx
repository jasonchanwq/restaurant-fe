import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="50px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <Text>Navigation Bar Component</Text>
      <Text>Button</Text>
      <Text>Button</Text>
      <Text>Button</Text>
      <Text>Button</Text>
      <Text>Button</Text>
      <Text>Button</Text>
    </HStack>
  );
};

export default NavigationBar;
