import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css";

let Users = (props:UsersPropsType) => {

    return (
        <div>
            {props.users.users.map((u)=>
                <div className={classes.container} key={u.id}>
                    <div className={classes.wrap}>
                        <div ><img className={classes.avatar} src={u.url} alt=""/></div>
                        {u.followed?<button onClick={()=>props.unfollow(u.id)} className={classes.button}>Unfollow</button>:<button onClick={()=>props.follow(u.id)} className={classes.button}>Follow</button>}
                    </div>

                    <div className={classes.wrapper}>
                        <div className={classes.top}>
                            <div className={classes.name}>{u.fullName}</div>
                            <div className={classes.country}>{u.location.country}</div>
                        </div >
                        <div className={classes.footer}>
                            <div className={classes.status}>{u.status}</div>
                            <div className={classes.city}>{u.location.city}</div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;