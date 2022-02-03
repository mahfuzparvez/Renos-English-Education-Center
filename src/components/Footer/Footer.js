import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css';
const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <p id='footerHeading'>©2022 Renos English learning Center. Don't copy anything without permission.</p>
                <p className='font'><BsEnvelopeFill /></p>
                <p className='font'><FaLinkedinIn /></p>
                <p className='font'><FaFacebookF /></p>
                <p className='font'><FaWhatsapp /></p>
            </footer>
        </div>
    );
};

export default Footer;