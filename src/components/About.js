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

            <Text color={isDark ? 'gray.400' : 'gray.700'} fontSize={'lg'}>
            My name is Tengku and I'm a computer science undergraduate student at Hanyang University, Seoul, South Korea. I have developed a foundation in programming languages like C and Java. Even so, I find myself feeling more ecstatic and comfortable working with HTML5, CSS3, and Javascript with React.js in the realm of front-end development. 
            </Text>

            <Text color={isDark ? 'gray.400' : 'gray.700'}fontSize={'lg'}>
            In my idle hours, I enjoy working on cinematogrophy projects that involve filming and editing videos. Sometimes, I play the piano and attempt to produce my music just for fun. At the moment, I’m working on my skills in UI/UX Design and also focusing towards learning the back-end specifically Node.js.
            </Text>

            <Text color={isDark ? 'gray.400' : 'gray.700'} fontSize={'lg'}>
            Feel free to contact me should you have any question in mind. I would like to know more about you! 
            </Text>

            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
            </Stack>
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
  