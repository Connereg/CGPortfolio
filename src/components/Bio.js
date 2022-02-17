import React from 'react';
import { Image } from 'semantic-ui-react';
import connerpic from './connerpic.jpeg';


function Bio() {

    return (
        <div className="bio-div">
            <h2>About Me:</h2>
            <Image circular centered size="medium" src={connerpic} alt="conner_pic" />
            

        </div>
    )
}

export default Bio;