import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://www.grundfos.com/content/dam/systems/topbar/global/grundfos-logo.png'/>
        </header>
    );
};

export default Header;