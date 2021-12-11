import React, { useEffect, useRef }  from 'react'
import lottie from "lottie-web";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import { Button, ButtonGroup, Container, Heading, Link } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';


function NotFound() {
    const container = useRef(null)
    let navigate = useNavigate();

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            animationData: require('./not-found.json')
        })
    }, [])

    return (
        <div>
            <Container>
            <Heading mt="2rem" lineHeight="2.5rem" fontSize="2.5rem">Hmm, the page doesn't seem to be available.</Heading>
            <div className='containerrr' ref={container}></div>
            <Text>If you think this is a mistake, feel free to <Link color="blue">send feedback</Link>.</Text>            
            <ButtonGroup mt="1.5rem" mb="4rem">
            <Button onClick={() => {navigate("/")}}>Back to home</Button>
            </ButtonGroup>
            </Container>
            

        </div>
    )
}

export default NotFound
