import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-scroll';
import { descriptionCopy, interestsCopy, skillsCopy } from './bioCopy';
import './Bio.scss';

function BioCarousel() {

    const descriptionLink = (<Link
        activeClass="active"
        to="contact-me-div"
        spy={true}
        smooth={true}
        offset={-70}
        durations={500}
    >Let's do great work together!</Link>);
    const interestsLink = (<Link
        activeClass="active"
        to="contact-me-div"
        spy={true}
        smooth={true}
        offset={-70}
        durations={500}
    >Feel free to ask any questions!</Link>);
    const skillsLink = (<Link
        activeClass="active"
        to="contact-me-div"
        spy={true}
        smooth={true}
        offset={-70}
        durations={500}
    > Contact me to learn more! </Link>);
    return (
        <Carousel autoPlay>
            <div>
                <Card id="conner-bio-card">
                    <Card.Content header='About Conner' />
                    <Card.Content description={[descriptionCopy, descriptionLink]} />
                </Card>
            </div>
            <div>
                <Card id="conner-interests-card">
                    <Card.Content header='My Interests' />
                    <Card.Content description={[interestsCopy, interestsLink]} />
                </Card>
            </div>
            <div>
                <Card id="conner-my-skills-card">
                    <Card.Content header='My Technical Skills' />
                    <Card.Content description={[skillsCopy, skillsLink]} />
                </Card>
            </div>
        </Carousel>
    )
}

export default BioCarousel;