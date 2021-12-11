import { Button } from '@chakra-ui/button';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { background } from '@chakra-ui/styled-system';
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { useColorMode } from '@chakra-ui/color-mode'

const Links = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");
    let navigate = useNavigate();

    return (   
        <Stack direction='column' spacing={4} align='center'className="customMargin">
        <Button width={"40vh"}colorScheme='gray' variant='outline' backgroundColor={isDark ? "black" : "white"} borderColor="gray"  onClick={() => {navigate("/about")}}>About</Button>
        <Button width={"40vh"}colorScheme='gray' variant='outline' backgroundColor={isDark ? "black" : "white"} borderColor="gray"  onClick={() => {navigate("/resume")}}>Resume</Button>
        <Button width={"40vh"}colorScheme='gray' variant='outline' backgroundColor={isDark ? "black" : "white"} borderColor="gray"  onClick={() => {navigate("/contact")}}>Contact</Button>
        <Link href="https://aideedamsyar.com/blog"><Button width={"40vh"} rightIcon={<ArrowForwardIcon />} colorScheme='gray' variant='outline' borderColor="gray" backgroundColor={isDark ? "black" : "white"}>Blog</Button></Link>
        <Link href="https://studio.aideedamsyar.com"><Button width={"40vh"} rightIcon={<ArrowForwardIcon />} colorScheme='gray' variant='outline' borderColor="gray" backgroundColor={isDark ? "black" : "white"}>Art Inspiration</Button></Link>
        </Stack>          
        
    );
}
 
export default Links;