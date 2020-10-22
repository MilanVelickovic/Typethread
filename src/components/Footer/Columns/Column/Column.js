import React from 'react';

import './Column.css';

const Column = (props) => (
    <div className="Column">
        {props.children}
    </div>
);

export default Column;