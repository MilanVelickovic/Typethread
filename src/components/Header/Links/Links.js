import React from 'react';

import Link from './Link/Link';

import './Links.css';

import arrowDownIcon from '../../../assets/Arrows/arrow-down.svg';

const Links = (props) => (
    <ul className="Links">
        <Link>Pricing</Link>
        <Link>Features</Link>
        <Link>More&nbsp;<img src={arrowDownIcon} alt="Arrow down icon"/></Link>
        {props.forPhone ? 
        <>
            <Link>Sign In</Link>
            <Link>Sign Up</Link>
            <Link>FAQ's</Link>
        </> : null}
    </ul>
);

export default Links;