import React from 'react';

import Overview from './Overview/Overview';

import './OverviewSection.css';

import clockIcon from '../../assets/Overview/clock.svg';
import settingsIcon from '../../assets/Overview/settings.svg';
import updateIcon from '../../assets/Overview/update.svg';
import image from '../../assets/Overview/image.svg';
import image1 from '../../assets/Overview/image(1).svg';
import image2 from '../../assets/Overview/image(2).svg';

const OverviewSection = () => (
    <div className="OverviewSection">
        <div className="description">
            <h1>Everything you need in one place</h1>
            <p>The all-in-one solution to grow your Twitter and manage everything through one convenient interface. Every tool is only one click away and ready to boost your Twitter conversion. </p>
        </div>
        <Overview icon={clockIcon} image={image}>
            <p>Posting Schedule</p>
            <h2>Schedule tweets & threads</h2>
            <p>Well planned and scheduled threads that boost your conversion.</p>
            <p>Done in seconds through the stylish and easy to use interface.</p>
        </Overview>
        <Overview icon={updateIcon} image={image1} reverse={true}>
            <p>Auto Retweets</p>
            <h2>Engage your audience</h2>
            <p>Precise Auto-Retweet feature to increase engagement with your audience.</p>
        </Overview>
        <Overview icon={settingsIcon} image={image2}>
            <p>Analytics</p>
            <h2>Measure your performance</h2>
            <p>Take data driven actions through valuable in-depth insights to grow your reach and sales. </p>
        </Overview>
    </div>
);

export default OverviewSection;