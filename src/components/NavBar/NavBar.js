import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll';


function NavBar(props) {

   const { setAppFocus } = props;

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
            <Menu className="navbar-menu">
                <Link
                    activeClass="active"
                    to="landing-page-div"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    durations={500}
                >
                    <Menu.Item
                        name='home'
                        content='Home'
                        onClick={(e) => setAppFocus("home")}>
                    </Menu.Item>
                </Link>
                <Link
                    activeClass="active"
                    to="bio-div"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    durations={500}
                >
                    <Menu.Item 
                        name='bio'
                        content='Bio'
                        onClick={(e) => setAppFocus("bio")}>
                    </Menu.Item>
                </Link>
                <Link
                    activeClass="active"
                    to="portfolio-div"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    durations={500}
                >
                    <Menu.Item 
                        name='portfolio'
                        content='Portfolio'
                        onClick={(e) => setAppFocus("portfolio")}>
                    </Menu.Item>
                </Link>
                <Link
                    activeClass="active"
                    to="blog-div"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    durations={500}
                >
                    <Menu.Item
                        name='blog'
                        content='Blog'
                        onClick={(e) => setAppFocus("blog")}>
                    </Menu.Item>
                </Link>
                <Link
                    activeClass="active"
                    to="contact-me-div"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    durations={500}
                >
                    <Menu.Item
                        name='contactme'
                        content='Contact Me'
                        onClick={(e) => setAppFocus("contactme")}>
                    </Menu.Item>
                </Link>
            </Menu>
        </div>
    )
}


export default NavBar;