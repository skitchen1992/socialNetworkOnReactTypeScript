import React from 'react';
import userPhoto from "../../assets/images/2.png";
import s from "../Users/Users.module.css";
import {FollowingInProgress, UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {Button} from "@material-ui/core";



type UserTypes = {
    followUnfollowFlow: (userId: number, isFollowed?: boolean) => void
    followingInProgress: Array<FollowingInProgress>
    user:UsersType
}


const User = (props: UserTypes) => {
    return (
        <>
                <div className={s.container}>
                    <div className={s.wrap}>
                        <div>
                            <NavLink to={`/profile/${props.user.id}`}>
                                <img className={s.avatar}
                                     src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <Button size={"small"} variant="outlined" color="primary"  disabled={props.followingInProgress
                            .some(id => id === props.user.id)} onClick={() => {
                            props.followUnfollowFlow(props.user.id, props.user.followed)
                        }}>
                            {props.user.followed ? 'Unfollow' : 'Follow'}
                        </Button>
                    </div>

                    <div className={s.wrapper}>
                        <div className={s.top}>
                            <div className={s.name}>Name:{props.user.name}</div>
                            <div className={s.country}>ID:{props.user.id}</div>
                        </div>
                        <div className={s.footer}>
                            <div className={s.status}>Status:{props.user.status?props.user.status:"not specified"}</div>
                            <div className={s.city}>{props.user.uniqueUrlName}</div>
                        </div>
                    </div>
                </div>
        </>

    );
};

export default User;