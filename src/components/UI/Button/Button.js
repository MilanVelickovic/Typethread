import React from 'react';

import './Button.css';

const Button = (props) => {

    let attachedClasses = ["Button"];

    switch (props.size) {
        case "small":
            attachedClasses.push("smallButton");
            break;
        case "medium":
            attachedClasses.push("mediumButton");
            break;
        case "large":
            attachedClasses.push("largeButton");
            break;
        case "custom":
            attachedClasses.push("customButton");
            break;
        default:
            break;
    }

    switch (props.color) {
        case "orange":
            attachedClasses.push("orangeButton");
            break;
        case "purple":
            attachedClasses.push("purpleButton");
            break;
        case "mixBlueGreen":
            attachedClasses.push("mixBlueGreenButton");
            break;
        default:
            break;
    }

    return (
        <button className={attachedClasses.join(' ')}>{props.children}</button>
    );

};

export default Button;