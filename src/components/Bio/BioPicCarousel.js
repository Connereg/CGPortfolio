import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';

import connerpic from '../assets/connerpic.jpeg';
import connerpic2 from '../assets/connerpic2.jpeg';
import connerpic3 from '../assets/connerpic3.jpeg';

import './Bio.scss';



function BioPicCarousel(props) {
    const { selectedItemIndex } = props;

    return (
        <div id="bio-pic-carousel">
            <Carousel
                showThumbs={false}
                showArrows={false}
                autoPlay={false}
                selectedItem={selectedItemIndex}
                transitionTime={500}
            >
                <div className="bio-carousel-pic">
                    <img className="cg-bio-pic" src={connerpic3} alt="conner_pic3" />
                </div>
                <div className="bio-carousel-pic">
                    <img className="cg-bio-pic" src={connerpic2} alt="conner_pic2" />
                </div>
                <div className="bio-carousel-pic">
                    <img className="cg-bio-pic" src={connerpic} alt="conner_pic1" />
                </div>
            </Carousel>
        </div>

    )
}
export default BioPicCarousel;