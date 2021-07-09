import {connect} from "react-redux";
import {
    followSuccess, FollowingInProgress,
    InitialStateType,
    setCurrentPage,
    unfollowSuccess, follow, unfollow, requestUsers, UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import classes from "../Users/UsersContainer.module.css";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


// type MapStateToPropsType = {
//     users: InitialStateType
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: Array<FollowingInProgress>
//
// }
type MapStateToPropsType = {
    users: InitialStateType,
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
    requestUsers: (page: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}
type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
type GetTasksResponseType = {
    items: InitialStateType
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersPropsType, GetTasksResponseType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
                           followingInProgress={this.props.followingInProgress}
                    />;
                </div>
            </div>
        )
    }
}

// let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         users: state.usersPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        requestUsers,
        unfollow,
        follow
    })
)(UsersContainer)

