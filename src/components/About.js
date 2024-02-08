import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    let navigate = useNavigate();

    return (
      <Container maxW={'3xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={isDark ? "white" : "gray.700"}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('gray.50', 'gray.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About me
            </Text>

            <Heading>Hello there!</Heading>

            
            <Box ml={10} mr={10} mb={10}>
              <Text fontSize='lg' >My name is Tengku Aideed Amsyar. I am a Malaysian living in South Korea and an aspiring software engineer. </Text>
            </Box> 
            <Box ml={10} mr={10} mb={10}>
              <Text fontSize='lg' >I created this site as a platform to showcase a glimpse into my professional endeavors and highlight my journey in computer science.</Text>
            </Box>   
            <Box ml={10} mr={10} mb={10}>
              <Text fontSize='lg' >In my idle hours, I dive into the world of cinematography that spans filming and editing videos. Sometimes, my interest in music finds me at the piano, composing and producing melodies as a creative outlet. </Text>
            </Box> 
            <Box ml={10} mr={10} mb={10}>
              <Text fontSize='lg' >Please feel free to reach out should you have any questions in mind. I would like to learn more about you!</Text>
            </Box>  
                
         
          </Stack>
          <Flex>

          </Flex>
          <ButtonGroup>  
          <Button onClick={() => {navigate("/resume")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Resume</Button>
          <Button onClick={() => {navigate("/contact")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Contact</Button>
        </ButtonGroup>
        </SimpleGrid>
      </Container>
    );
  }
  