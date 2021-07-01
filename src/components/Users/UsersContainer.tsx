import {connect} from "react-redux";
import {
    followAC, FollowingInProgress,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC, toggleIsFollowingProgressAC,
    unfollowAC
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";

import Users from "./Users";
import classes from "../Users/UsersContainer.module.css";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<FollowingInProgress>

}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (users: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress:(isFetching: boolean, userId:number) => void

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


type GetTasksResponseType = {
    items: InitialStateType
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersPropsType, GetTasksResponseType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return (
            <div className={classes.loaderPoz}>
                <div className={classes.loader}>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>

                <div className={classes.users}>
                    <Users onPageChanged={this.onPageChanged}
                           totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           unfollow={this.props.unfollow}
                           follow={this.props.follow}
                           toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                           followingInProgress={this.props.followingInProgress}
                    />;
                </div>
            </div>
        )

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: []) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleIsFollowingProgress: (isFetching: boolean, userId:number) => {
            dispatch(toggleIsFollowingProgressAC(isFetching,userId))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);