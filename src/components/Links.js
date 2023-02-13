import { Button } from '@chakra-ui/button';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
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
        <Stack mb={10} direction='column' justify='left' spacing={2} className="customMargin">
            <Link onClick={() => {navigate("/about")}}><Text fontSize='lg' as='u'>About</Text></Link>
            <Link onClick={() => {navigate("/resume")}}><Text fontSize='lg' as='u'>Resume</Text></Link>
            <Link onClick={() => {navigate("/contact")}}><Text fontSize='lg' as='u'>Contact</Text></Link>
            <Link href="https://aideedamsyar.com/blog"><Text fontSize='lg' as='u'>Blog </Text><ExternalLinkIcon mx='2px'/></Link>
            <Link href="https://studio.aideedamsyar.com" isExternal><Text fontSize='lg' as='u'>Art Inspiration </Text><ExternalLinkIcon mx='2px' /></Link>
        </Stack>          
        
    );
}
 
export default Links;