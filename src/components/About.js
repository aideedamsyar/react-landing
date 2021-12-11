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
      <Container maxW={'5xl'} py={12}>
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
            My name is Aideed. I am a 19-year-old Malaysian who is currently living in Kuala Lumpur, Malaysia. Intrigued by how empowering the knowledge of computer science is, I look forward to learning more and delving deep into the field. I ambitiously aim to become a full stack developer with astounding skills and extensive knowledge.
            </Text>
            <Text color={isDark ? 'gray.400' : 'gray.700'} fontSize={'lg'}>
            I am the creator of the blog and Instagram page called 
            <Link className="seoulture" color={isDark ? 'white' : 'black'} href="https://seoulture.com"> Seoulture </Link>
            where I post about my quest to explore the Korean culture as well as how it connects to my very own. 
            </Text>
            <Text color={isDark ? 'gray.400' : 'gray.700'}fontSize={'lg'}>
            In my idle hours, I enjoy working on videography projects that involve filming and editing videos. Sometimes, I play the piano and attempt to produce my music just for fun. At the moment, I’m working on my skills in UI/UX Design and Web Development.
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
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://64.media.tumblr.com/e014d9110547e8d53df90f806eb92438/tumblr_inline_qlla3rJzU41udnk24_500.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
          <ButtonGroup>  
          <Button onClick={() => {navigate("/resume")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Resume</Button>
          <Button onClick={() => {navigate("/contact")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Contact</Button>
        </ButtonGroup>
        </SimpleGrid>
      </Container>
    );
  }
  