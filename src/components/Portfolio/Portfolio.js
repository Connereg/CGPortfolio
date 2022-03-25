import React from 'react';
import MashlyProject from './MashlyProject';

import './Portfolio.scss';
import ProjectCarousel from './ProjectCarousel';


function Portfolio() {
 
    return (
        <div id="portfolio-div">
            <h1 className="section-header"> Portfolio </h1>
            <MashlyProject />
            <ProjectCarousel />
        </div>
    )
}

export default Portfolio;