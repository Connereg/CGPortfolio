import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Card } from 'semantic-ui-react';
import { descriptionCopy, interestsCopy, skillsCopy } from './bioCopy';
import LinkToContact from './LinkToContact'
import './Bio.scss';


const descriptionLink = "Let's do great work together!"
const interestsLink = "Feel free to ask any questions!"
const skillsLink = "Contact me to learn more!"

const aboutMeDiv = () => (
    <div>
        <div>
            {descriptionCopy}
        </div>
        <div>
            <LinkToContact text={descriptionLink} />
        </div>
    </div>
);

const myInterestsDiv = () => (
    <div>
        <div>
            {interestsCopy}
        </div>
        <div>
            <LinkToContact text={interestsLink} />
        </div>
    </div>
);

const skillsDiv = () => (
    <div>
        <div>
            {skillsCopy}
        </div>
        <div>
            <LinkToContact text={skillsLink} />
        </div>
    </div>
)


function BioCarousel(props) {
    const { selectedItemIndex, focusInCarousel } = props;

    return (
        <>
        <div class="carousel-control-menu">
            <span id="about-me-btn" onClick={focusInCarousel(0)} class="carousel-control-button">About Me</span>
            <span id="my-interests-btn" onClick={focusInCarousel(1)} class="carousel-control-button">My Interests</span>
            <span id="my-skills-btn" onClick={focusInCarousel(2)} class="carousel-control-button">My Skills</span>
        </div>
        <Carousel selectedItem={selectedItemIndex} className="bio-carousel-component">
            <div>
                <Card id="conner-bio-card">
                    <Card.Content header='About Conner' />
                    <Card.Content description={aboutMeDiv} />
                </Card>
            </div>
            <div>
                <Card id="conner-interests-card">
                    <Card.Content header='My Interests' />
                    <Card.Content description={myInterestsDiv} />
                </Card>
            </div>
            <div>
                <Card id="conner-my-skills-card">
                    <Card.Content header='My Technical Skills' />
                    <Card.Content description={skillsDiv} />
                </Card>
            </div>
        </Carousel>
        </>
    )
}

export default BioCarousel;