import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function NavBar(props) {

   const { appFocus, setAppFocus } = props;

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
                <Link to={"/"}>
                    <Menu.Item
                        name='home'
                        content='Home'
                        onClick={(e) => setAppFocus("home")}>
                    </Menu.Item>
                </Link>
                <Link to={"/bio"}>
                    <Menu.Item 
                        name='bio'
                        content='Bio'
                        onClick={(e) => setAppFocus("bio")}>
                    </Menu.Item>
                </Link>
                <Link to={"/portfolio"}>
                    <Menu.Item 
                        name='portfolio'
                        content='Portfolio'
                        onClick={(e) => setAppFocus("portfolio")}>
                    </Menu.Item>
                </Link>
                <Link to={"/contactme"}>
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