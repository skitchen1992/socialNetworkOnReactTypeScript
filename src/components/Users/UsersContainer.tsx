import {connect} from "react-redux";
import {
    CommonUsersReducerType,
    followSuccess, FollowingInProgress, getUsers,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unfollowSuccess, follow, unfollow
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import classes from "../Users/UsersContainer.module.css";
import Preloader from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<FollowingInProgress>

}
type MapDispatchToPropsType = {
    followSuccess: (userID: number) => void
    unfollowSuccess: (userID: number) => void
    setCurrentPage: (users: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


type GetTasksResponseType = {
    items: InitialStateType
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersPropsType, GetTasksResponseType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
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
                        //toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    getUsers,
    unfollow,
    follow,
})(UsersContainer);