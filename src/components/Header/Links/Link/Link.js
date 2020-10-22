import React from 'react';

import './Link.css';

const Link = (props) => (
    <li className="Link">{props.children}</li>
);

export default Link;