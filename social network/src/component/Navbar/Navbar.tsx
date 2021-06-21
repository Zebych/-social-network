import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to={'/profile'} activeClassName={c.active}> Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/dialogs'} activeClassName={c.active}> message</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/new'} activeClassName={c.active}>news</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/musik'} activeClassName={c.active}>music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'settings'} activeClassName={c.active}>settings</NavLink>
            </div>
        </nav>);
}

export default Navbar;
