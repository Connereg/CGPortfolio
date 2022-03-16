import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './LandingPage.scss';



function LandingPage() {
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

     const socialprops = useSpring({ 
         to : { opacity: 1 },
         from: { opacity: 0 },
         reset: false,
         delay: 1200,
         config: { mass:1, tension: 280, friction: 900},
         onRest: () => set(!flip)
     })

    return(
        <div id="landing-page-div" className="landing-page-div full-height navbar-spacing">
            <animated.div className="animated-header" style={nameprops}>
                <h1 className="landing-header">Conner Gleason</h1>
                <animated.h2 className="landing-secondary" style={detailprops}> Web Developer and Quality Assurance Engineer</animated.h2>
            </animated.div> 
            <animated.h1 className="landing-fluffer" style={socialprops}>
                Let's Make Something Amazing Together!
            </animated.h1>
        </div>
    )
}

export default LandingPage;