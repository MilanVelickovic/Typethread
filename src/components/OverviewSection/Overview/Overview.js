import React, { useEffect, useRef } from 'react';

import { fadeIn } from '../../../animations';

import './Overview.css';

const Overview = (props) => {

    let overviewElement = useRef(null);

    useEffect(() => {
        fadeIn(overviewElement);
    });

    let attachedClasses = ["Overview"];
    let attachedClassesForImage = ["moveImageRight"];

    if (props.reverse === true) {
        attachedClasses.push("reverse");
        attachedClassesForImage.pop();
        attachedClassesForImage.push("moveImageLeft");
    }

    return (
        <div className={attachedClasses.join(' ')} ref={element => {overviewElement = element}}>
            <div className="leftSideOverview">
                <img src={props.icon} className={attachedClassesForImage.join(' ')} alt="Overview icon"/>
                {props.children}
            </div>
            <div className="rightSideOverview">
                <img src={props.image} className={attachedClassesForImage.join(' ')} alt="Overview"/>
            </div>
        </div>
    );

};

export default Overview;