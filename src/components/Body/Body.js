import React from "react";
import Bio from '../Bio/Bio';
import Portfolio from '../Portfolio/Portfolio';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';



function Body() {


    return (
        <div>
            <Bio />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
        
    )
}

export default Body;