import React from 'react';
import userPhoto from "../../assets/images/2.png";
import classes from "../Users/Users.module.css";
import {FollowingInProgress, InitialStateType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersTypes = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: InitialStateType
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    toggleIsFollowingProgress: (isFetching: boolean,userId:number) => void
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
                        {u.followed ?

                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true, headers: {
                                            "API-KEY": "c48f3115-8ef6-4eff-913e-2249d6f1fd23"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false,u.id)
                                    })
                            }}
                                    className={classes.button}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true, headers: {
                                        "API-KEY": "c48f3115-8ef6-4eff-913e-2249d6f1fd23"
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false,u.id)
                                })
                            }
                            }
                                    className={classes.button}>Follow</button>}
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