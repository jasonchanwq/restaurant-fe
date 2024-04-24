import { HStack, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import React from "react";
import logo from "../assets/logo.png";


const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="50px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <Text>Navigation Bar Component</Text>
      <Text>Home</Text>
      <ChakraLink as={ReactRouterLink} to='/home'>
        Home
      </ChakraLink>
      <Text>Gallery</Text>
      <Text>Contacts</Text>
    </HStack>
  );
};

export default NavigationBar;