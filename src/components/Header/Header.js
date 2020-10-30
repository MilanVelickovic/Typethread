import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Links from './Links/Links';
import Dropdown from '../UI/Dropdown/Dropdown';

import './Header.css';

import logo from '../../assets/Logo/logo.svg';
import userIcon from '../../assets/Header/user.svg';
import burgerMenuIcon from '../../assets/Header/burger-menu.svg';
import exitIcon from '../../assets/Header/exit.svg';

import { fixBody } from '../../position';

const Header = () => {

    let [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);
    let [profileDisplay, setProfileDisplay] = useState(false);

    return (
        <>
        <header className="Header">
            <div className="changableIcon">
                {!burgerMenuDisplay ? 
                <img src={burgerMenuIcon} onClick={() => {
                    setBurgerMenuDisplay(!burgerMenuDisplay);
                    fixBody(!burgerMenuDisplay);
                    setProfileDisplay(false);
                }} alt="Burger icon"/> :
                <img src={exitIcon} onClick={() => {
                    setBurgerMenuDisplay(!burgerMenuDisplay);
                    fixBody(!burgerMenuDisplay);
                    setProfileDisplay(false);
                }} alt="Exit icon"/>}
            </div>
            <div className="logoAndLinksPart">
                <img src={logo} alt="Logo"/>
                <div className="linksHolder">
                    <Links forPhone={false}/>
                </div>
            </div>
            <div className="options">
                <Button>Sign in</Button>
                <Button size="medium" color="orange">Sign up</Button>
            </div>
            <div className="user">
                <img src={userIcon} onClick={() => {
                    setProfileDisplay(!profileDisplay);
                    fixBody(!profileDisplay);
                    setBurgerMenuDisplay(false);
                }} alt="User"/>
            </div>
        </header>
        <Dropdown show="links" display={burgerMenuDisplay}/>
        <Dropdown show="profile" display={profileDisplay}/>
        </>
    );
};

export default Header;