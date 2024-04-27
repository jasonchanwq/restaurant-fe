import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack,
  Box,
  FormLabel,
  InputRightAddon,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useRef, useState } from "react";

const BookingDrawer = () => {
  const currentDate = new Date();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstFieldRef = useRef<HTMLInputElement>(null); // Define a ref for the first input field
  const [startDate, setStartDate] = useState<Date | null>(currentDate);
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  const currentTime = new Date();
  const minTime = new Date();
  const tenAM = new Date();
  tenAM.setHours(10, 0, 0, 0); // Set time to 10:00 AM
  minTime.setHours(
    currentDate.getDate() === startDate?.getDate()
      ? currentTime.getHours() > tenAM.getHours()
        ? currentTime.getHours()
        : 10
      : 10
  );
  const maxTime = new Date();
  maxTime.setHours(21, 30); // 10:00 PM

  return (
    <>
      {/* Button to open the drawer */}
      <Button onClick={onOpen} colorScheme="red" width={"auto"}>
        Book a Table
      </Button>

      {/* Drawer component */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Book a table at J Restaurant</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  ref={firstFieldRef}
                  id="name"
                  placeholder="Please enter name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="contactnumber">Contact Number</FormLabel>
                <Input
                  id="contactnumber"
                  placeholder="Please enter Contact Number"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="size">Party Size</FormLabel>
                <Select id="size" defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Box
                  border="1px"
                  borderColor="gray.200"
                  borderRadius="md"
                  p="3"
                  display="inline-flex"
                >
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={currentDate}
                    maxDate={maxDate}
                    minTime={minTime}
                    maxTime={maxTime}
                    placeholderText="Select a date before 7 days in the future"
                  />
                </Box>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BookingDrawer;
