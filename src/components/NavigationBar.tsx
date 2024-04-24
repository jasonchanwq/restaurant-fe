import { HStack, Heading, Text, Box, Link as ChakraLink, LinkProps, Flex, Container } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import React from "react";
import logo from "../assets/logo.png";

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
    <Flex justifyContent="space-between" alignItems="center" p='50px'>
      <Box>
        <img src={logo} style={{ width: "100px", height: "100px", opacity: "0.7" }} />
      </Box>
      <Box paddingRight={100}>
        <HStack>
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
      </Box>
    </Flex>
  );
};

export default NavigationBar;