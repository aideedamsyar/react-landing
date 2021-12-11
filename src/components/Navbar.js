import React from "react";
import { IconButton } from "@chakra-ui/button";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useColorMode } from "@chakra-ui/color-mode";
import {Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuIcon,MenuCommand,MenuDivider} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Heading, Link, Spacer, VStack } from "@chakra-ui/layout";
import logo from '../media/logo.svg'
import logoPNG from '../media/logoPNG.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const bg = useColorModeValue('#E5E5E5', 'dark')
    let navigate = useNavigate();

    return (  
        
        <div>
        <VStack p={3} pb={0}>     
          <Flex w="100%">
            <img onClick={() => {navigate("/")}} className="logo" src={logoPNG} alt="logo" />
            <Spacer></Spacer>
            <IconButton mr={2} icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
            <Menu>
        <MenuButton
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='1px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Menu <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => {navigate("/")}}>Home</MenuItem>
          <MenuItem onClick={() => {navigate("/about")}}>About</MenuItem>
          <MenuItem onClick={() => {navigate("/resume")}}>Resume</MenuItem>
          <MenuItem onClick={() => {navigate("/contact")}}>Contact</MenuItem>
          <MenuDivider />
          <Link href="https://aideedamsyar.com/blog"><MenuItem>Blog</MenuItem></Link>
          <Link href="https://studio.aideedamsyar.com"><MenuItem>Art Inspiration</MenuItem></Link>
        </MenuList>
        </Menu>
        </Flex>
        </VStack>  
        
        </div>
    );
}
 
export default Navbar;