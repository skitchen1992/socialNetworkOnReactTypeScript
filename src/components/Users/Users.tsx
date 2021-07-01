import React from 'react';
import userPhoto from "../../assets/images/2.png";
import classes from "../Users/Users.module.css";
import {FollowingInProgress, InitialStateType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersTypes = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: InitialStateType
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    //toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<FollowingInProgress>


}


const Users = (props: UsersTypes) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.users.users.map((u) =>

                <div className={classes.container} key={u.id}>
                    <div className={classes.wrap}>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={classes.avatar}
                                     src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        {u.followed
                            ? <button className={classes.button} disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button className={classes.button} disabled={props.followingInProgress
                                .some(id => id === u.id)} onClick={() => {props.follow(u.id)
                            }}>Follow</button>}
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
            <div className={classes.currentPage}>
                {pages.map(p => props.currentPage === p ? <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={classes.selectedPage}>{p}</span> :
                    <span onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>)}

                {/*//return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>*/}
            </div>
        </div>

    );
};

export default Users;