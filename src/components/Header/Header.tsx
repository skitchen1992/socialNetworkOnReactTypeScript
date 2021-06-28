import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";


function Header(props:any){
    return(
        <header className={s.header}>
            <img className={s.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1200px-Vk_Logo.svg.png"></img>
            <div className={s.login}>
                {props.isAuth?props.login:<NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    )
}
export default Header;