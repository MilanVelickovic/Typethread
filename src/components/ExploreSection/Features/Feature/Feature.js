import React from 'react';

import './Feature.css';

const Feature = (props) => (
    <div className="Feature">
        <img src={props.icon} alt="Feature Icon"/>
        {props.children}
    </div>
);

export default Feature;