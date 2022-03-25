import React from 'react';
import { Link } from 'react-scroll';

import './NavBar.scss';


function NavBar(props) {


   document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', sticknav);
    const navbar = document.getElementById("navbar-div")
    const sticky = navbar.offsetTop;

    function sticknav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
   })


    return (
        <div id="navbar-div"className="navbar-div">
            <nav className="flex navbar">
                <div className="link-wrap">
                    <Link
                        activeClass="active"
                        to="landing-page-div"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        durations={500}
                    >
                        <div className="page-link active"> Home </div>
                    </Link>

                    <Link
                    activeClass="active"
                    to="bio-div"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    durations={500}
                    >
                        <div className="page-link active"> Bio </div>
                    </Link>

                    <Link
                    activeClass="active"
                    to="portfolio-div"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    durations={500}
                    >
                        <div className="page-link"> Portfolio </div>
                    </Link>

                    <Link
                    activeClass="active"
                    to="blog-div"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    durations={500}
                    >
                        <div className="page-link"> Blog </div>
                    </Link>

                    <Link
                    activeClass="active"
                    to="contact-me-div"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    durations={500}
                    >
                        <div className="page-link"> Contact </div>
                    </Link>

                </div>
            </nav>
        </div>
    )
}


export default NavBar;