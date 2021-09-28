import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './Header.module.css';

type HeaderPropsType={
    login: string | null,
    isAuth:boolean,
    logout:()=>void
}
const Header:React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={c.header}>
            <img
                src={'https://st.depositphotos.com/2321413/3088/v/600/depositphotos_30889807-stock-illustration-simple-social-media-icon.jpg'}/>
            <div className={c.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}- <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    )
}


export default Header;
