import React from 'react';
import Logo from '../assets/imges/logoGray.png';
import { FaFacebook, FaPinterest, } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            <img src={Logo} alt="gray_logo" />
            <div className='social-icons'>
                <FaFacebook />
                <FaPinterest />
                <AiFillTwitterCircle />
            </div>
            <h6>All © Rights Reserved 2018 BehindMars</h6>
        </footer>
    );
};

export default Footer;