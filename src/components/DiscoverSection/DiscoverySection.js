import React from 'react';

import Button from '../UI/Button/Button';

import './DiscoverySection.css';

import arrowRightIcon from '../../assets/Arrows/arrow-thin-right.svg';

const DiscoverySection = () => (
    <div className="DiscoverySection">
        <p>Get started with <b>Typethread</b> today!</p>
        <h2>Discover the most robust and user-friendly solution, to grow your twitter audience.</h2>
        <Button size="large" color="purple">Start Your Free Trial&nbsp;<img src={arrowRightIcon} alt="Arrow right"/></Button>
    </div>
);

export default DiscoverySection;