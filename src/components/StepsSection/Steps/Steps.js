import React from 'react';

import Step from './Step/Step';

import './Steps.css';

import timeIcon from '../../../assets/Steps/time.svg';
import audioIcon from '../../../assets/Steps/audio.svg';
import heartIcon from '../../../assets/Steps/heart.svg';
import lockIcon from '../../../assets/Steps/lock.svg';

const Steps = () => (
    <div className="Steps">
        <Step image={timeIcon}>
            <h2>More time to create</h2>
            <p>Schedule your content. Have more time for what truly matters.</p>
        </Step>
        <Step image={audioIcon}>
            <h2>Reach Bigger audience</h2>
            <p>Reach bigger audiences with well timed threads.</p>
        </Step>
        <Step image={heartIcon}>
            <h2>Long term fans</h2>
            <p>Build relationships and long-term fans that value your content.</p>
        </Step>
        <Step image={lockIcon}>
            <h2>Safe and secure</h2>
            <p>We play by the rules. Typethread is 100% Twitter compliant.</p>
        </Step>
    </div>
);

export default Steps;