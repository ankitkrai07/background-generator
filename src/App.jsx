import React, { useState } from "react";
import { Button, Center, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffff");

  const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode; // Set background color of the body
    setBackgroundColor(randomCode);
    navigator.clipboard.writeText(randomCode);
  };

  return (
    <Center h="100vh">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container
          maxW="lg"
          p="8"
          borderRadius="xl"
          boxShadow="lg"
          textAlign="center"
          bg="aliceblue"
        >
          <Heading id="color-code" fontSize="3xl" color={backgroundColor}>
            {backgroundColor}
          </Heading>
          <Button
            mt="4"
            fontSize="xl"
            borderRadius="md"
            bgColor="rgb(40, 36, 36)"
            color="aliceblue"
            onClick={getColor}
          >
            Change Color
          </Button>
          <Text mt="2" fontSize="xl">
            Click on the color code to copy it!
          </Text>
        </Container>
      </motion.div>
    </Center>
  );
}

export default App;
