import React from 'react';

import Steps from './Steps/Steps';

import './StepsSection.css';

const StepsSection = () => (
    <div className="StepsSection">
        <div className="description">
            <h1>Simple Steps - Incomparable Results</h1>
            <p>Typethread takes scheduling to the next level.</p>
            <p>A combination of attention generating threads and well timed delivery. One upping your Twitter engagement and conversion rate - without sacrificing valuable time.</p>
        </div>
        <Steps/>
    </div>
);

export default StepsSection;