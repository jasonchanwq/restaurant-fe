import { HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <HStack
      justifyContent="space-between"
      padding="10px 50px"
      backgroundColor="black" // Example background color
      position="fixed" // Position the navigation bar fixed at the top
      top="0" // Place the navigation bar at the top of the viewport
      width="100%" // Ensure the navigation bar spans the full width of the viewport
      zIndex="1000" // Ensure the navigation bar is on top of other content
    >
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <HStack spacing={20} color={"white"}>
        <Text as={Link} to="/">
          Home
        </Text>
        <Text as={Link} to="/menu">
          Menu
        </Text>
        <Text as={Link} to="/about">
          About
        </Text>
        <Text as={Link} to="/gallery">
          Gallery
        </Text>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
