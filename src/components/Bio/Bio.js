import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BioCarousel from './BioCarousel';
import BioPicCarousel from './BioPicCarousel';
// import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';


function Bio() {
    
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const focusInCarousel = (index) => () => setSelectedItemIndex(index);

    return (
        <div className="bio-div full-height" id="bio-div">
            <BioPicCarousel selectedItemIndex={selectedItemIndex} />
            <BioCarousel selectedItemIndex={selectedItemIndex} focusInCarousel={focusInCarousel} />
        </div>
    )
}
export default Bio;