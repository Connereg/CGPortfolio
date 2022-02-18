import React from 'react';
import { Link } from 'react-scroll';


const LinkToContact = ({ text }) => (
    <Link
        activeClass="active"
        to="contact-me-div"
        spy={true}
        smooth={true}
        offset={-70}
        durations={500}
    >
        {text}
    </Link>
);

export default LinkToContact;