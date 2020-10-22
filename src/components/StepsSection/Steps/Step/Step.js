import React from 'react';

import './Step.css';

const Step = (props) => (
    <div className="Step">
        <img src={props.image} alt="Image"/>
        {props.children}
    </div>
);

export default Step;