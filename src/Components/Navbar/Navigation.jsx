import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.nav}>

            <div>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>

            <div>
                <NavLink to="/dialogs"
                         className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div >
                <NavLink to="/news"
                         className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div>
                <NavLink to="/music"
                         className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to="settings"
                         className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;