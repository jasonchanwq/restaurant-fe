import { HStack, Heading, Text, } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="100px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <HStack spacing={20} color={"white"}>
        <Text as={Link} to="/">Home</Text>
        <Text as={Link} to="/menu">Menu</Text>
        <Text as={Link} to="/about">About</Text>
        <Text as={Link} to="/gallery">Gallery</Text>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;