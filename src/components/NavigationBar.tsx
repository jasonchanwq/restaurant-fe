import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.svg";

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="100px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <HStack spacing={20} color={"white"}>
        <Text>Navigation Bar Component</Text>
        <Text>Home</Text>
        <Text>Menu</Text>
        <Text>About</Text>
        <Text>Gallery</Text>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
