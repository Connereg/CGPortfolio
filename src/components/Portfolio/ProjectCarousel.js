import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'semantic-ui-react';
import Mtglockboxmodal from './Mtglockboxmodal';
import StarLoveModal from './StarLovemodal';

function ProjectCarousel() {

    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const focusInCarousel = (index) => () => setSelectedItemIndex(index);


    return (
        <>
        <h2 className="section-header">Additional Projects</h2>
        <h3 className="subsection-header">Click on a project image to learn more</h3>
        <div class="carousel-control-menu">
            <Button primary id="mtg-lockbox-btn" onClick={focusInCarousel(0)} class="carousel-control-button">MTG Lockbox App</Button>
            <Button primary id="my-interests-btn" onClick={focusInCarousel(1)} class="carousel-control-button">Star Love App</Button>
            <Button primary id="my-skills-btn" onClick={focusInCarousel(2)} class="carousel-control-button">My Skills</Button>
        </div>
        <Carousel selectedItem={selectedItemIndex} >
            <div>
                <Mtglockboxmodal />
            </div>
            <div>
                <StarLoveModal /> 
            </div>
            <div className="ongoing-section">
                <h2 className="section-header">Necessite.com</h2>
                <h3>Ongoing project for the Necessite Web Developer company based in France</h3>
                <h3>More Details Soon!</h3>
                
            </div>
        </Carousel>
        </>

    )
}

export default ProjectCarousel;