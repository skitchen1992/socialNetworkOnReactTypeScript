import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {UsersPropsType} from "./HeaderContainer";


function Header(props: UsersPropsType) {
    return (

        <header className={s.header}>
            <img className={s.img}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1200px-Vk_Logo.svg.png"></img>
            <div className={s.login}>

                {props.isAuth
                    ? <span>{props.login} - <button onClick={props.logout}>Logout</button></span>
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}

export default Header;