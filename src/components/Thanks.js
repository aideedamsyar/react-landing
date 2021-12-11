import React, { useEffect, useRef }  from 'react'
import lottie from "lottie-web";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from "react-router-dom";
import { Button, Container, Heading, Link } from '@chakra-ui/react';


function Thanks() {
    const container = useRef(null)
    let navigate = useNavigate();

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            animationData: require('./rocket.json')
        })
    }, [])

    return (
        <div>
            <Container>
            <Heading mt="2rem" mb="1.5rem" lineHeight="2.5rem" fontSize="2.5rem">The message is on its way!</Heading>
            <div className='container' ref={container}></div>
            <Button onClick={() => {navigate("/")}}>Back to home</Button>
            </Container>

        </div>
    )
}

export default Thanks
