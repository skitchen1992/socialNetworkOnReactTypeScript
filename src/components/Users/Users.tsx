import React from 'react';
import {FollowingInProgress, InitialStateType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


type UsersTypes = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: InitialStateType
    followUnfollowFlow: (userId: number, isFollowed?: boolean) => void
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
                <User followUnfollowFlow={props.followUnfollowFlow} followingInProgress={props.followingInProgress}
                      user={u}/>)}

            <Paginator onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}/>
        </div>

    );
};

export default Users;