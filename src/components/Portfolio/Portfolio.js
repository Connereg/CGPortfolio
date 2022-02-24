import React from 'react';
import MashlyProject from './MashlyProject';

import './Portfolio.scss';
import ProjectCarousel from './ProjectCarousel';

const tempImgSrc = 'https://react.semantic-ui.com/images/wireframe/image.png'

function Portfolio() {
 
    return (
        <section id="portfolio-div">
            <div class="container flex">
                <h1 className="section-header"> Portfolio </h1>
                <div >
                    <MashlyProject />
                    <ProjectCarousel />
                </div>            
            </div>
        </section>
    )
}

export default Portfolio;