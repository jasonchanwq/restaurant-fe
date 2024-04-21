import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <HStack>
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <Text>Navigation Bar</Text>
    </HStack>
  );
};

export default NavigationBar;
