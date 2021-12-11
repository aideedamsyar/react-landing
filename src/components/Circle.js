import React, { useEffect, useRef }  from 'react'
import lottie from "lottie-web";


function Circle() {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            animationData: require('./circle.json')
        })
    }, [])

    return (
        <div>
            
            <div className='containerr' ref={container}></div>
        </div>
    )
}

export default Circle
