import React from 'react';

import Button from '../UI/Button/Button';
import Links from './Links/Links';

import './Header.css';

import logo from '../../assets/Logo/logo.svg';
import userIcon from '../../assets/Header/user.svg';
import burgerMenuIcon from '../../assets/Header/burger-menu.svg';

const Header = () => (
    <header className="Header">
        <div className="burgerMenu">
            <img src={burgerMenuIcon} alt="Burger menu"/>
        </div>
        <div className="logoAndLinksPart">
            <img src={logo} alt="Logo"/>
            <Links/>
        </div>
        <div className="options">
            <Button>Sign in</Button>
            <Button size="medium" color="orange">Sign up</Button>
        </div>
        <div className="user">
            <img src={userIcon} alt="User"/>
        </div>
    </header>
);

export default Header;