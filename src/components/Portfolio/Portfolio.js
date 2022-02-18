import React from 'react';
import { Card } from 'semantic-ui-react';

import './Portfolio.scss';

const tempImgSrc = 'https://react.semantic-ui.com/images/wireframe/image.png'

function Portfolio() {

    return (
        <section id="portfolio-div">
            <div class="container flex">
                <h2> Portfolio Section </h2>
                <div class="flex row wrap">
                <Card.Group itemsPerRow={2}>
                    <Card raised image={tempImgSrc} />
                    <Card raised image={tempImgSrc} />
                    <Card raised image={tempImgSrc} />
                    <Card raised image={tempImgSrc} />
                    <Card raised image={tempImgSrc} />
                    <Card raised image={tempImgSrc} />
                </Card.Group>
                </div>            
            </div>
        </section>
        
    )
}

export default Portfolio;