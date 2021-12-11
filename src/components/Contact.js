import Circle from './Circle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    FormHelperText
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import {   BsPerson } from 'react-icons/bs';
  
  export default function Contact() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
      <Container maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
        
          <Box
            bg={isDark ? "white" : "black"}
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading color={isDark ? "black" : "white"}>Contact.</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the following form to contact me!
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Circle />
                       
                      </VStack>
                    </Box>

                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg={isDark ? "black" : "white"} borderRadius="lg">
                    <Box m={8} color={isDark ? "white" : "black"}>
                      <VStack spacing={5}>
                      <form action="https://formsubmit.co/6bfb6188e6676479175c152f6a2b8806" method="POST">
                        <FormControl id="name" isRequired>
                          <FormLabel color={isDark ? "white" : "black"}>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input placeholder='(cool name only)' type="text" name="name" size="md" />
                            
                            
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name" isRequired>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                            
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input placeholder='(to get back to you)' type="text" size="md" name="email" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            name="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            mt={2}
                            type="submit"
                            variant="solid"
                            bg="orange"
                            color={isDark ? "black" : "white"}
                            _hover={{}}>
                            Send :)
                          </Button>
                        </FormControl>
                        
                        </form>
                        


                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }