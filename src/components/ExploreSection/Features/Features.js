import React from 'react';

import Feature from './Feature/Feature';

import './Features.css';

import userGroupIcon from '../../../assets/Explore/user-group.svg';
import headsetIcon from '../../../assets/Explore/headset.svg';

const Features = () => (
    <div className="Features">
        <Feature icon={userGroupIcon} highlighted={true}>
            <h3>Multiple Accounts</h3>
            <p>Send your tweets from one, easily-navigated interface.</p>
        </Feature>
        <Feature icon={headsetIcon}>
            <h3>Help & Support</h3>
            <p>Help that creates long-term satisfaction and loyalty.</p>
        </Feature>
    </div>
);

export default Features;