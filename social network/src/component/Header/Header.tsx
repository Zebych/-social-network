import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Header.module.css';
import {InitialAuthStateType} from "../../Redax/auth-reducer";

type HeaderPropsType={
    auth:InitialAuthStateType
}
const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={c.header}>
            <img
                src={'https://st.depositphotos.com/2321413/3088/v/600/depositphotos_30889807-stock-illustration-simple-social-media-icon.jpg'}/>
            <div className={c.loginBlock}>
                {props.auth.isAuth
                    ? props.auth.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}


export default Header;
