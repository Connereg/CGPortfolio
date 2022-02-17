import React from "react";
import Bio from './Bio';
import Portfolio from './Portfolio';
import Contact from './Contact';



function Body() {

    return (
        <div>
            <h2>BODY SECTION</h2>
            <Bio />
            <Portfolio />
            <Contact />
        </div>
        
    )
}

export default Body;