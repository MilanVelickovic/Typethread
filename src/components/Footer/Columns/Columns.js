import React from 'react';

import Column from './Column/Column';
import Button from '../../UI/Button/Button';

import './Columns.css';

import envelopeIcon from '../../../assets/Footer/envelope.svg';
import twitterIcon from '../../../assets/Footer/twitter.svg';

const Columns = (props) => (
    <div className="Columns"> 
        <Column>
            <h2>Our product</h2>
            <ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>How it works</li>
                <li>Why Typethread</li>
                <li>FAQ</li>
            </ul>
        </Column>
        <Column>
            <h2>Company</h2>
            <ul>
                <li>About Us</li>
                <li>Customers</li>
                <li>Blog</li>
            </ul>
        </Column>
        <Column>
            <h2>Get started</h2>
            <ul>
                <li>
                    <div className="input">
                        <input type="text" placeholder="Email address"/><img src={envelopeIcon} alt="Envelope Icon"/>
                    </div>
                </li>
                <li><Button size="small" color="orange">Sign Up</Button></li>
                <li>Sign In</li>
                <li><img src={twitterIcon} alt="Twitter Icon"/></li>
            </ul>
        </Column>
    </div>
);

export default Columns;