import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Flex, Stack, Box, Text, VStack } from '@chakra-ui/layout';
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
        <VStack>
            {/* <GamingTime /> */}
            <Stack align='center'>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
            
            <Box mt={isNotSmallerScreen ? "0" : "0"} mb={5} ml={5} align='flex-start'>
                <Text mb="-7"fontSize="5xl" fontWeight="semibold">Hi, my name is</Text>
                <Text fontSize="7xl" fontWeight="bold">Aideed.</Text>
                <Text>I'm an aspiring Full Stack Developer currently living in Kuala Lumpur, Malaysia.</Text>
            </Box>
            <VStack>
                <Links></Links>
                <Social></Social>
            </VStack>

            
            </Flex>
            
        </Stack>
        </VStack>
        
        
        
    )
}

export default Home
