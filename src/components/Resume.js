import React from 'react'
import { Box, Button, Link, Text, Flex, Spacer, Stack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from "@chakra-ui/color-mode";
import CVPDF from '../media/CV.pdf'
import CVDocx from '../media/CV.docx'
import GamingTime from './GamingTime'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";



import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  
function Resume() {
    let navigate = useNavigate();
    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)");
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <div>
            <Container>
                
            <Box mt="0" ml={5} align='flex-start'>
                <Text fontSize="7xl" fontWeight="bold">Resume.</Text>
            </Box>
            <GamingTime />
            <Stack direction='row'>
                <Button variant='solid' size='xs' mb="1.5rem" onClick={()=> {window.open(CVPDF)}} >Download CV (PDF)</Button>
                <Button variant='solid' size='xs' mb="1.5rem" onClick={()=> {window.open(CVDocx)}} >Download CV (Docx)</Button>
            </Stack>
            

            
            
            <Accordion mb={6} allowToggle borderColor={isDark ? "gray.100" : "gray.500"}>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Education
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">Hanyang University</Text>
                    </Flex>    
                    <Text fontSize="sm" fontWeight="bold ">Seoul, South Korea</Text>
                    <Flex>
                        <Text mr={2} color={isDark ? "gray.100" : "gray.900"} fontSize="lg" fontWeight="normal">Bachelor of Computer Science </Text>
                        <Text color='gray.500' fontSize="xs" fontWeight="normal">2023 - 2027 (Expected)</Text>
                    </Flex>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">Silla University</Text>
                    </Flex>    
                    <Text fontSize="sm" fontWeight="bold ">Busan, South Korea</Text>
                    <Flex>
                        <Text mr={2} color={isDark ? "gray.100" : "gray.900"} fontSize="lg" fontWeight="normal">Korean Language Preparatory Program</Text>
                        <Text color='gray.500' fontSize="xs" fontWeight="normal">2022 - 2023</Text>
                    </Flex>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">University of Malaya</Text>
                    </Flex>    
                    <Text fontSize="sm" fontWeight="bold ">Kuala Lumpur, Malaysia</Text>
                    <Flex>
                        <Text mr={2} color={isDark ? "gray.100" : "gray.900"} fontSize="lg" fontWeight="normal">Foundation in Physical Sciences</Text>
                        <Text color='gray.500' fontSize="xs" fontWeight="normal">2020 - 2021</Text>
                    </Flex>
                    </AccordionPanel>

                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Achievements
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0}>
                    <Text fontSize="xl" fontWeight="bold">The 3rd International STEM Seminar</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2021</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="xl" fontWeight="bold">Malaysian National Chemistry Quiz</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2021</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="xl" fontWeight="bold">International Mathematical Olympiad National Selection Test 1 (IMONST 1)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2020</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="xl" fontWeight="bold">MRSM National Leadership Convention</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2019</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="xl" fontWeight="bold">Schoolwide Enrichment Model (SEM): Honourable Mention (Biological Scientific Research Category)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2018</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="xl" fontWeight="bold">National Science Challenge</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2018</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Text fontSize="xl" fontWeight="bold">Korea - Malaysia Cultural Exchange Program (Incheon, South Korea)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2018</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Text fontSize="xl" fontWeight="bold">Malaysia - Kaichi High School Exchange Program (Wakayama, Japan)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">2016</Text>
                    </AccordionPanel>


                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Leadership Experience
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Text fontSize="xl" fontWeight="bold">Projek Masih Ada Yang Sayang (Fundraising)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Head of Bureau (Multimedia) | 2020-2021</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Text fontSize="xl" fontWeight="bold">Projek Emas Hitam G6 Open Badminton Tournament</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Project Director | 2019</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Text fontSize="xl" fontWeight="bold">Pétanque Club of MRSM Taiping</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">President | 2018-2019</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Text fontSize="xl" fontWeight="bold">English Motivational Committee</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Publicity Bureau | 2018 - 2019</Text>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Skills & Interest
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Skills</Text>                
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Fluent in C, Java, HTML5, CSS3/SASS, Javascript, React.js. Able to work in Microsoft Office & Apple ecosystem. Videography using Final Cut Pro X. Product Design (UI/UX) using Figma. Language: Malay, English, Korean.</Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Certification</Text>       
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Test of Proficiency in Korean (TOPIK) - Level 5</Text>
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Malaysian University English Test (MUET) - Band 5</Text>
                             
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Data Science for Business, DataCamp (<Link color={'blue'} onClick={() => {window.open("https://www.datacamp.com/statement-of-accomplishment/course/25d6dcdf824eec8d8825aa562af48c1326fee071")}}>See credential</Link>)</Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Interests</Text>                
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Full Stack Software Engineering (lean towards Front-End Development), Product Design (UI/IX), Cinematography, Writing.</Text>
                    </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Volunteering Experience
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0}>
                    <Text fontSize="lg" fontWeight="bold">17th Busan Fireworks Festival, Busan Metropolitan City</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Member of Safety Team | 2022</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="lg" fontWeight="bold">Clean Our Plate Project, AIESEC in University of Malaya</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Delegate | 2021</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="lg" fontWeight="bold">Road to Sustainability Youth Virtual Program</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Buddy | 2021 </Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="lg" fontWeight="bold">Projek Murni (Tutoring Program for Rumah Kasih Harmoni)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Tutor | 2020</Text>
                    </AccordionPanel>

                    <AccordionPanel pb={0}>
                    <Text fontSize="lg" fontWeight="bold">Program Khidmat Masyarakat di Sekolah Luar Bandar (Community Service at SK Sultan Abdullah, Changkat Jering, Perak)</Text>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Facilitator | 2020</Text>
                    </AccordionPanel>
                </AccordionItem>

                

                
                    
            </Accordion>
            <Button mb={10} onClick={() => {navigate("/contact")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Contact</Button>
            </Container>
             
        </div>
    )
}

export default Resume
