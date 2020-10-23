import React from 'react';

import './Column.css';

const Column = (props) => {

    let attachedClasses = ["Column"];

    if (props.mutable === true) {
        attachedClasses.push("mutable");
    }

    return (
        <div className={attachedClasses.join(' ')}>
            {props.children}
        </div>
    );

};

export default Column;