import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    login: string | null
    isAuth: boolean
    logoutThunk: () => void
}

function Header({login, isAuth, logoutThunk}: PropsType) {
    return (
        <header className={s.header}>
            <div style={{textAlign: 'center'}}>I SOCIAL</div>
            <div className={s.login}>

                {isAuth ? <div> {login}
                    <button onClick={() => logoutThunk()}> logout</button>
                </div> : <NavLink to={'/login'}> Login</NavLink>}
            </div>
        </header>
    )
}

export default Header