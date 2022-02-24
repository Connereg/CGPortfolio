import React from 'react';
import { Image } from 'semantic-ui-react';
import connerpic from '../assets/connerpic.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BioCarousel from './BioCarousel';
// import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';


function Bio() {

    return (
        <div className="bio-div full-height" id="bio-div">
            <Image id="connerpic" circular centered size="medium" src={connerpic} alt="conner_pic" />
            <BioCarousel />
        </div>
    )
}
export default Bio;