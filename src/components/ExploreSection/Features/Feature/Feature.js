import React from 'react';

import './Feature.css';

const Feature = (props) => (
    <div className="Feature">
        <div className="featureIconHolder">
            <img src={props.icon} alt="Feature Icon"/>
        </div>
        {props.children}
    </div>
);

export default Feature;