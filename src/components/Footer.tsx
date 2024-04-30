import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import locationpin from "../assets/locationpin.svg";
import phone from "../assets/phone.svg";

const Footer = () => {
  return (
    <HStack
      justifyContent="space-between"
      padding="50px"
      bottom="0%"
      right="5%"
      width="30%"
      position="absolute"
      zIndex="1000"
    >
      <HStack spacing={6} color={"white"}>
        <img src={locationpin} style={{ width: "50px", height: "50px" }} />
        <Stack>
          <Text>135 Geylang Rd, #01-01,</Text>
          <Text>Singapore 389226</Text>
        </Stack>
      </HStack>
      <HStack spacing={6} color={"white"}>
        <img src={phone} style={{ width: "50px", height: "50px" }} />

        <Stack>
          <Text>+65 6741 0344</Text>
          <Text>12pm-2:30pm, 6pm-10:30pm</Text>
        </Stack>
      </HStack>
    </HStack>
  );
};

export default Footer;
