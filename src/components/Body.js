import React from "react";
import Bio from './Bio';
import Portfolio from './Portfolio';
import Contact from './Contact';



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