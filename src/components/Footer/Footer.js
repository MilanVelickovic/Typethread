import React from 'react';

import Columns from './Columns/Columns';

import './Footer.css';

import logo from '../../assets/Logo/logo.svg';
import globeIcon from '../../assets/Footer/globe.svg';

const Footer = () => (
    <div className="Footer">
        <div className="leftSideFooter">
            <img src={logo} alt="Logo"/>
            <p>The only tool you’ll ever need to grow your Twitter audience and engagement in bussiness</p>
        </div>
        <div className="rightSideFooter">
            <Columns/>
        </div>
        <div className="bottomSideFooter">
            <div className="language">
                <img src={globeIcon} alt="Globe Icon"/>
                <p>&nbsp;English</p>
            </div>
            <div className="details">
                <p>&copy;&nbsp;2020&nbsp;Typethread&nbsp;|&nbsp;Terms of Service&nbsp;|&nbsp;Privacy and Policy</p>
                <p>Typethread is a Web Based Twitter Automation Tool</p>
            </div>
        </div>
    </div>
);

export default Footer;