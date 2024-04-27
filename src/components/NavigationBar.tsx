import { HStack, Heading, Text, Box, Link as ChakraLink, LinkProps, Flex, Container } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import React from "react";
import logo from "../assets/logo.svg";

interface NavButton {
  title?: React.ReactNode;
}

const ButtonFeature = ({ title }: NavButton): any => {
  return (
    <Box p={5} filter='auto'>
      <Heading fontSize='xl' color='white' >{title}</Heading>
    </Box>
  )
}

const NavigationBar = () => {
  return (
    <HStack justifyContent="space-between" padding="100px">
      <img src={logo} style={{ width: "100px", height: "100px" }} />
      <HStack spacing={20} color={"white"}>
        <ButtonFeature
            title='Home'
          />
          <ButtonFeature
            title='Menu'
          />
          <ButtonFeature
            title='Gallery'
          />
          <ButtonFeature
            title='Contact Us'
          />
        </HStack>
    </HStack>
  );
};

export default NavigationBar;