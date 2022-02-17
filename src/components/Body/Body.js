import React from "react";
import Bio from '../Bio/Bio';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';



function Body(props) {
    const { setAppFocus } = props;


    return (
        <div>
            <Bio setAppFocus={setAppFocus} />
            <Portfolio />
            <Contact />
        </div>
        
    )
}

export default Body;