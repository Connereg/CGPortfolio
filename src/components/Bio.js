import React, { useState } from 'react';
import { Image, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import connerpic from './connerpic.jpeg';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';


function Bio(props) {

    const { setAppFocus } = props;

    const [ shownCard, setShownCard ] = useState("")

    const description = [
        'I am a dedicated and enthusiastic web developer from the New York Metropolitan area.',
        ' Possessing have full-stack web development capabilities and automated testing, I am constantly pushing myself to grow my skills and create amazing applications! ',
        <Link to="contactme" onClick={(e) => setAppFocus("contactme")}>Let's do great work together!</Link>
    ]

    const interests = [
        'My interests outside of web development are skateboarding, studying film and television history, DJing and running an electronic music label, and competitive fighting games. ',
        <Link to="contactme" onClick={(e) =>setAppFocus("contactme")}>Feel free to ask any questions!</Link>
    ]

    const skills = [
        ' React ∙ Javascript ∙ Ruby/Rails ∙ GIT ∙ PostgreSql ∙ HTML ∙ CSS ∙ Nightwatch.js ∙ Python ∙ Node.Js ',
        <Link to="contactme" onClick={(e) => setAppFocus("contactme")}> Contact me to learn more! </Link>
    ]

    

    return (
        <div className="bio-div full-height" id="bio-div">
            <Image id="connerpic" circular centered size="medium" src={connerpic} alt="conner_pic" />
            <Button onClick={(e) => setShownCard("aboutme")}> About Me </Button>
            <Button onClick={(e) => setShownCard("myinterests")}> My Interests </Button>
            <Button onClick={(e) => setShownCard("myskills")}> My Skills </Button>
            {shownCard === "aboutme" ? 
                <Card id="conner-bio-card">
                    <Card.Content header='About Conner' />
                    <Card.Content description={description} />
                </Card> : null}
            {shownCard === "myinterests" ? 
                <Card id="conner-interests-card">
                    <Card.Content header='My Interests' />
                    <Card.Content description={interests} />
                </Card> : null}
            {shownCard === "myskills" ?
                <Card id="conner-my-skills-card">
                    <Card.Content header='My Technical Skills' />
                    <Card.Content description={skills} />
                </Card> : null}
        </div>
    )
}

export default Bio;