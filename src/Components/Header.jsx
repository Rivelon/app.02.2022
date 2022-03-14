import React from 'react';
import classes from  './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://www.grundfos.com/content/dam/systems/topbar/global/grundfos-logo.png'/>
        </header>
    );
};

export default Header;