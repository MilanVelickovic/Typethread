import React, { useEffect, useRef } from 'react';

import Button from '../UI/Button/Button';

import { animateText } from '../../animations';

import './DiscoverySection.css';

import arrowRightIcon from '../../assets/Arrows/arrow-thin-right.svg';

const DiscoverySection = () => {

    let pElement = useRef(null);
    let hElement = useRef(null);

    useEffect(() => {
        animateText(pElement, "topToBottom");
        animateText(hElement, "bottomToTop");
    });

    return (
        <div className="DiscoverySection">
            <p ref={element => {pElement = element}}>Get started with <b>Typethread</b> today!</p>
            <div>
                <h2 ref={element => {hElement = element}}>Discover the most robust and user-friendly solution, to grow your twitter audience.</h2>
            </div>
            <Button size="large" color="purple">Start Your Free Trial&nbsp;<img src={arrowRightIcon} alt="Arrow right"/></Button>
        </div>
    );
};

export default DiscoverySection;