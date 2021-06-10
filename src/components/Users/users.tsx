import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import  axios from "axios";
import {InitialStateType} from "../../redux/users-reducer";
import userPhoto from '../../../src/assets/images/2.png';

type GetTasksResponseType = {
    items: InitialStateType
    totalCount: number
    error: string | null
}


let Users = (props: UsersPropsType) => {
    if(props.users.users.length===0){

        axios.get<GetTasksResponseType>("https://social-network.samuraijs.com/api/1.0/users").
        then(response=>{
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {props.users.users.map((u) =>
                <div className={classes.container} key={u.id}>
                    <div className={classes.wrap}>
                        <div><img className={classes.avatar} src={u.photos.small!=null ? u.photos.small:userPhoto} alt=""/></div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)} className={classes.button}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)} className={classes.button}>Follow</button>}
                    </div>

                    <div className={classes.wrapper}>
                        <div className={classes.top}>
                            <div className={classes.name}>{u.name}</div>
                            <div className={classes.country}>{"u.location.country"}</div>
                        </div>
                        <div className={classes.footer}>
                            <div className={classes.status}>{u.status}</div>
                            <div className={classes.city}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;