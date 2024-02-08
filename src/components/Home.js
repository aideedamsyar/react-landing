import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Flex, Stack, Box, Text, VStack, Center } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorModeValue } from "@chakra-ui/color-mode";
import React from 'react'
import Links from './Links';
import Social from './Social';
import GamingTime from './GamingTime';

function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");

    
    return (
        <VStack mt={isNotSmallerScreen ? "0" : "3.7rem"}>
            {/* <GamingTime /> */}
            <Stack align='center'>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
            
            <Center>
            <Box mt={isNotSmallerScreen ? "0" : "0"} ml={10} mr={10} mb={10} width='70%'>
                <Text fontSize='xl' >I'm Tengku, an aspiring full stack software engineer based in Seoul, South Korea. I find myself drawn to full-stack software engineering, particularly front-end development. I am also interested in product design and writing, and I enjoy learning about these fields whenever I can.</Text>
                <Stack mt={10}>
                    <Links></Links>
                    <Social></Social>
                </Stack>
            </Box>
            </Center>

            {/* <Stack ml={16} mr={10} mb={10} width='70%'>
                <Links></Links>
                <Social></Social>
            </Stack> */}
            
            </Flex>

            
            
        </Stack>
        </VStack>
               
    )
}

export default Home
