import React from 'react';
import userPhoto from "../../assets/images/2.png";
import classes from "../Users/Users.module.css";
import {FollowingInProgress, UsersType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';



type UserTypes = {
    followUnfollowFlow: (userId: number, isFollowed?: boolean) => void
    followingInProgress: Array<FollowingInProgress>
    user:UsersType
}


const User = (props: UserTypes) => {
    return (
        <>
                <div className={classes.container}>
                    <div className={classes.wrap}>
                        <div>
                            <NavLink to={`/profile/${props.user.id}`}>
                                <img className={classes.avatar}
                                     src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <button className={classes.button} disabled={props.followingInProgress
                            .some(id => id === props.user.id)} onClick={() => {
                            props.followUnfollowFlow(props.user.id, props.user.followed)
                        }}>
                            {props.user.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>

                    <div className={classes.wrapper}>
                        <div className={classes.top}>
                            <div className={classes.name}>{props.user.name}</div>
                            <div className={classes.country}>{"u.location.country"}</div>
                        </div>
                        <div className={classes.footer}>
                            <div className={classes.status}>{props.user.status}</div>
                            <div className={classes.city}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
        </>

    );
};

export default User;