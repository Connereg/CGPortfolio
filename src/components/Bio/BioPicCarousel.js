import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';

import connerpic from '../assets/connerpic.jpeg';
import connerpic2 from '../assets/connerpic2.jpeg';
import connerpic3 from '../assets/connerpic3.jpeg';



function BioPicCarousel(props) {
    const { selectedItemIndex } = props;

    return (
        <div id="bio-pic-carousel">
            <Carousel selectedItem={selectedItemIndex} transitionTime={500}>
                <div>
                    <Image id="connerpic" circular centered size="medium" src={connerpic} alt="conner_pic" />
                </div>
                <div>
                    <Image id="connerpic2" circular centered size="big" src={connerpic2} alt="conner_pic2" />
                </div>
                <div>
                    <Image id="connerpic3" circular centered size="big" src={connerpic3} alt="conner_pic3" />
                </div>
            </Carousel>
        </div>

    )
}
export default BioPicCarousel;