import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Links from './Links/Links';

import './Header.css';

import logo from '../../assets/Logo/logo.svg';
import userIcon from '../../assets/Header/user.svg';
import burgerMenuIcon from '../../assets/Header/burger-menu.svg';
import exitIcon from '../../assets/Header/exit.svg';

const Header = () => {

    let [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);

    return (
        <>
        <header className="Header">
            <div className="changableIcon">
                {!burgerMenuDisplay ? 
                <img src={burgerMenuIcon} onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)} alt="Burger icon"/> :
                <img src={exitIcon} onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)} alt="Exit icon"/>}
            </div>
            <div className="logoAndLinksPart">
                <img src={logo} alt="Logo"/>
                <div className="linksHolder">
                    <Links/>
                </div>
            </div>
            <div className="options">
                <Button>Sign in</Button>
                <Button size="medium" color="orange">Sign up</Button>
            </div>
            <div className="user">
                <img src={userIcon} alt="User"/>
            </div>
        </header>
        {burgerMenuDisplay ? <div className="burgerMenu">
            <Links forPhone={true}/>
            <p>Terms&nbsp;&&nbsp;Services</p>
        </div> : null}
        </>
    );
};

export default Header;