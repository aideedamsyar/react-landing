import React, { useEffect, useRef }  from 'react'
import lottie from "lottie-web";


function GamingTime() {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            animationData: require('./gaming-time.json')
        })
    }, [])

    return (
        <div>
            
            <div className='container' ref={container}></div>
        </div>
    )
}

export default GamingTime
