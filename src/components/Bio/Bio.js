import React, { useState } from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import connerpic from '../assets/connerpic.jpeg';
import { descriptionCopy, interestsCopy, skillsCopy } from './bioCopy';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';


function Bio(props) {

    const { setAppFocus } = props;

    const [ shownCard, setShownCard ] = useState("aboutme")

    const descriptionLink = (<Link to="contactme" onClick={() => setAppFocus("contactme")}>Let's do great work together!</Link>);
    const interestsLink = (<Link to="contactme" onClick={() =>setAppFocus("contactme")}>Feel free to ask any questions!</Link>);
    const skillsLink = (<Link to="contactme" onClick={() => setAppFocus("contactme")}> Contact me to learn more! </Link>);

    return (
        <div className="bio-div full-height" id="bio-div">
            <Image id="connerpic" circular centered size="medium" src={connerpic} alt="conner_pic" />
            <Button onClick={(e) => setShownCard("aboutme")}> About Me </Button>
            <Button onClick={(e) => setShownCard("myinterests")}> My Interests </Button>
            <Button onClick={(e) => setShownCard("myskills")}> My Skills </Button>
            {shownCard === "aboutme" ? 
                <Card id="conner-bio-card">
                    <Card.Content header='About Conner' />
                    <Card.Content description={[descriptionCopy, descriptionLink]} />
                </Card> : null}
            {shownCard === "myinterests" ? 
                <Card id="conner-interests-card">
                    <Card.Content header='My Interests' />
                    <Card.Content description={[interestsCopy, interestsLink]} />
                </Card> : null}
            {shownCard === "myskills" ?
                <Card id="conner-my-skills-card">
                    <Card.Content header='My Technical Skills' />
                    <Card.Content description={[skillsCopy, skillsLink]} />
                </Card> : null}
        </div>
    )
}

export default Bio;