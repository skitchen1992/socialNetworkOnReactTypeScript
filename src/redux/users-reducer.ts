import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import axios from "axios";
import React from "react";

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsers = (users: []) => ({type: "SET-USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: "SET-TOTAL-COUNT", count: totalCount}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching}) as const
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOGGLE-IS-FOLLOWING",
    isFetching,
    userId
}) as const

export type FollowACActionType = {
    type: "FOLLOW",
    userId: number
}
export type UnFollowACActionType = {
    type: "UNFOLLOW",
    userId: number
}
export type SetUsersACActionType = {
    type: "SET-USERS",
    users: []
}
export type SetCurrentPageACType = {
    type: "SET-CURRENT-PAGE",
    currentPage: number
}
export type SetTotalUsersCountACType = {
    type: "SET-TOTAL-COUNT",
    count: number
}
export type ToggleIsFetching = {
    type: "TOGGLE-IS-FETCHING",
    isFetching: boolean,


}
export type ToggleIsFollowingProgress = {
    type: "TOGGLE-IS-FOLLOWING",
    isFetching: boolean,
    userId: number
}
export type CommonUsersReducerType =
    FollowACActionType
    | UnFollowACActionType
    | SetUsersACActionType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetching
    | ToggleIsFollowingProgress


export type UsersType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string,
    "photos": {
        "small": string,
        "large": string,
    },
    "status": string,
    "followed": boolean
}
export type FollowingInProgress = number


export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {//Санка
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

type FollowUnfollowFlowtype ={
    dispatch: Dispatch,
    userId:string,
    apiMethod:()=>void
    actionCreator:()=>void
}
export const followUnfollowFlow = (userId: number, isFollowed?: boolean) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))

   // const response = await apiMethod (userId)
    const apiMethod = isFollowed ?  usersAPI.unfollow.bind(userId) : usersAPI.follow.bind(userId);
    const actionCreator = isFollowed ?  unfollowSuccess : followSuccess;
    dispatch(toggleIsFollowingProgress(true, userId))
    const response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

// export const follow = (userId: number) => async (dispatch: Dispatch) => {//Санка
//     const apiMethod = usersAPI.follow.bind(userId)
//     const actionCreator = followSuccess
//     dispatch(toggleIsFollowingProgress(true, userId))
//     const response = await apiMethod (userId)
//
//     if (response.data.resultCode === 0) {
//         dispatch(actionCreator(userId))
//     }
//     dispatch(toggleIsFollowingProgress(false, userId))
// }
// export const unfollow = (userId: number) => async (dispatch: Dispatch) => {//Санка
//
//     const apiMethod = usersAPI.unfollow.bind(userId)
//     const actionCreator = unfollowSuccess
//     dispatch(toggleIsFollowingProgress(true, userId))
//     const response = await apiMethod(userId)
//
//     if (response.data.resultCode === 0) {
//         dispatch(actionCreator(userId))
//     }
//     dispatch(toggleIsFollowingProgress(false, userId))
// }


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<FollowingInProgress>
}
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: CommonUsersReducerType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default :
            return state
    }

}
export default usersReducer