import React from 'react';

import './Feature.css';

const Feature = (props) => {

    let attachedClasses = ["Feature"];

    if (props.highlighted === true) {
        attachedClasses.push("highlighted");
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <img src={props.icon} alt="Feature Icon"/>
            {props.children}
        </div>
    );

};

export default Feature;