import React, { useRef, useEffect } from 'react';

import { fadeInWithScroll } from '../../../../animations';

import './Step.css';

const Step = (props) => {

    let stepElement = useRef(null);

    useEffect(() => {
        fadeInWithScroll(stepElement);
    });

    return (
        <div className="Step" ref={element => {stepElement = element}}>
            <img src={props.image} alt="Step"/>
            {props.children}
        </div>
    );
};

export default Step;