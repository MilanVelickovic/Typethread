import React, { useRef, useEffect } from 'react';

import { fadeIn } from '../../../../animations';

import './Step.css';

const Step = (props) => {

    let stepElement = useRef(null);

    useEffect(() => {
        fadeIn(stepElement);
    });

    return (
        <div className="Step" ref={element => {stepElement = element}}>
            <img src={props.image} alt="Step"/>
            {props.children}
        </div>
    );
};

export default Step;