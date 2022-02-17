import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';



function Canvas() {
    const [flip, set] = useState(false)

    const nameprops = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        // reverse: flip,
        delay: 500,
        config: { mass:1, tension: 280, friction: 300},
        onRest: () => set(!flip),
     })

    const detailprops = useSpring({ 
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: false,
        // reverse: flip,
        delay: 500,
        config: { mass:1, tension: 280, friction: 400},
        onRest: () => set(!flip),
     })

    return(
        <div id="canvas-div" className="home-canvas-div">
            <div id="canvas" 
            // style={{ 
            //     width: "100%",
            //     height: "2000px",
            //     backgroundColor: "#616161",
            //  }}
            >
                <animated.div className="animated-header" style={nameprops}>
                    <h1>Conner Gleason</h1>
                    <animated.h2 style={detailprops}> Web Developer and Quality Assurance Engineer</animated.h2>
                </animated.div>     
            </div>
        </div>
    )
}

export default Canvas;