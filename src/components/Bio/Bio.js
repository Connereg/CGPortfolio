import React, { useState } from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import connerpic from '../assets/connerpic.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BioCarousel from './BioCarousel';
// import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';


function Bio(props) {

    const { setAppFocus } = props;

    // const descriptionLink = (<Link to="contactme" onClick={() => setAppFocus("contactme")}>Let's do great work together!</Link>);
    // const interestsLink = (<Link to="contactme" onClick={() =>setAppFocus("contactme")}>Feel free to ask any questions!</Link>);
    // const skillsLink = (<Link to="contactme" onClick={() => setAppFocus("contactme")}> Contact me to learn more! </Link>);

    return (
        <div className="bio-div full-height" id="bio-div">
            <Image id="connerpic" circular centered size="medium" src={connerpic} alt="conner_pic" />
            <BioCarousel />
        </div>
    )
}

export default Bio;