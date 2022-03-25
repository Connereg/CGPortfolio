import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Mtglockboxmodal from './Mtglockboxmodal';
import StarLoveModal from './StarLovemodal';

function ProjectCarousel() {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const focusInCarousel = (index) => () => setSelectedItemIndex(index);


    return (
        <div>
            <h2 className="section-header">Additional Projects</h2>
            <div class="carousel-control-menu">
                <span id="mtg-lockbox-btn" onClick={focusInCarousel(0)} class="carousel-control-button">MTG Lockbox App</span>
                <span id="star-love-btn" onClick={focusInCarousel(1)} class="carousel-control-button">Star Love App</span>
                <span id="coming-soon-btn" onClick={focusInCarousel(2)} class="carousel-control-button">Coming soon</span>
            </div>
            <h3 className="subsection-header">Click on a project image to learn more</h3>
            <Carousel selectedItem={selectedItemIndex} >
                <div>
                    <Mtglockboxmodal />
                </div>
                <div>
                    <StarLoveModal /> 
                </div>
                <div className="ongoing-section">
                    <h2 className="section-header">Necessite.com</h2>
                    <h3>Ongoing project for the Necessite Web Developement company based in France</h3>
                    <h3>More Details Soon!</h3>
                </div>
            </Carousel>
        </div>

    )
}

export default ProjectCarousel;