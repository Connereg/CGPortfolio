import React, {useState} from 'react';
import { Image, Button } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import MashlyHomepage from '../assets/MashlyHomepage.png';
import mashlyusersearch from '../assets/mashlyusersearch.png';
import mashlyuserprofile from '../assets/mashlyuserprofile.png';
import mashlycomments from '../assets/mashlycommentsection.png';

import './Portfolio.scss';

const MashlyProject = () => {
    const [isSlide, setIsSlide] = useState(true);
    const toggleIsSlide = () => setIsSlide(!isSlide);

    return (
        <div className="mashly-project-wrapper">
            <h2 className="subsection-header">Recent Project: Mashly Video Masher App</h2>
            <div className="mashly-button-wrapper">
                <Button primary onClick={toggleIsSlide}>{isSlide ? "Video Demo" : "Slides"}</Button>
                <a href="https://mashly-app.herokuapp.com/">
                    <Button secondary>Link To App</Button>
                </a>
            </div>     
            <div id="mashly-section" className="project-section">
                {isSlide ? (
                    <Carousel autoPlay={true} infiniteLoop interval="4000">
                        <div>
                            <Image src={MashlyHomepage} />
                            <p className="legend">Homepage and Secure Login</p>
                        </div>
                        <div>
                            <Image src={mashlyusersearch} />
                            <p className="legend">User Search Function</p>
                        </div>
                        <div>
                            <Image src={mashlyuserprofile} />
                            <p className="legend">User Profile and Mashup Collection</p>
                        </div>
                        <div>
                            <Image src={mashlycomments} />
                            <p className="legend">Mashup Player with Comment Section and Profile Hyperlinks</p>
                        </div>
                    </Carousel> ) : 
                    <div className="video-container">
                        <ReactPlayer className="mashly-demo-player" url="https://youtu.be/NRnfeyvBj9M?t=3" />
                    </div>
                }
            </div>
        </div>
    )

    

}

export default MashlyProject;