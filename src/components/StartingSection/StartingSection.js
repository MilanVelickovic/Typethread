import React from 'react';

import Button from '../UI/Button/Button';

import './StartingSection.css';

import illustration from '../../assets/Background/illustration.svg';
import arrowRightIcon from '../../assets/Arrows/arrow-thin-right.svg';

const StartingSection = () => (
    <div className="StartingSection">
        <div className="content">
            <div className="leftSide">
                <h1>Stay creative.</h1>
                <h1>Schedule Threads</h1>
                <p>While you stay creative. Your audience grows.</p>
                <Button size="large" color="purple">Start Your Free Trial&nbsp;<img src={arrowRightIcon} alt="Arrow right"/></Button>
                <div className="trialOptions">
                    <p>&bull;&nbsp;No credit card required</p>
                    <p>&bull;&nbsp;Cancel anytime</p>
                </div>
            </div>
            <div className="rightSide">
                <img src={illustration} alt="Illustration"/>
            </div>
        </div>
    </div>
);

export default StartingSection;