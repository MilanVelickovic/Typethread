import React from 'react';

import Links from '../../Header/Links/Links';
import Button from '../Button/Button';

import './Dropdown.css';

const Dropdown = (props) => {
    let attachedClasses = ["Dropdown"];

    if (props.display) {
        attachedClasses.push("display");
    }

    if (props.show === "links") {
        attachedClasses.push("ellipseLightBlue");
    }

    if (props.show === "profile") {
        attachedClasses.push("ellipseLightGray");
    }

    return (
        <div className={attachedClasses.join(' ')}>
            {props.show === "links" && props.display ?
                <>
                <Links forPhone={true}/>
                <p>Terms&nbsp;&&nbsp;Services</p>
                </> : null
            }
            {props.show === "profile" && props.display ?
                <>
                <div className="profile">
                <Button size="custom" color="mixBlueGreen">Sign In</Button>
                <Button size="custom" color="purple">Sign Up</Button>
                </div>
                <p className="centerText">Terms&nbsp;&&nbsp;Conditions Apply</p>
                </> : null
            }
        </div>
    );
}

export default Dropdown;