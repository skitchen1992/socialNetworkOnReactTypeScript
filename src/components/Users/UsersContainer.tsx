import {connect} from "react-redux";
import {
    followSuccess, FollowingInProgress,
    InitialStateType,
    setCurrentPage,
    unfollowSuccess, requestUsers, followUnfollowFlow
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

type MapStateToPropsType = {
    users: InitialStateType,
    pageSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<FollowingInProgress>

}
type MapDispatchToPropsType = {
    followSuccess: (userID: number) => void
    unfollowSuccess: (userID: number) => void
    followUnfollowFlow: (userId: number, isFollowed?: boolean) => void
    setCurrentPage: (users: number) => void
    requestUsers: (page: number, pageSize: number) => void
}
type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
type GetTasksResponseType = {
    items: InitialStateType
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersPropsType, GetTasksResponseType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {

        return (
            <div className={classes.loaderPoz}>
                <div className={classes.loader}>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>

                <div className={classes.users}>
                    <Users onPageChanged={this.onPageChanged}
                           totalItemsCount={this.props.totalItemsCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           followUnfollowFlow={this.props.followUnfollowFlow}
                           followingInProgress={this.props.followingInProgress}
                    />
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        followUnfollowFlow,
        setCurrentPage,
        requestUsers,
    })
)(UsersContainer)

