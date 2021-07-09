import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import axios from "axios";

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





export const requestUsers = (page:number, pageSize:number) =>{//Санка
    return (dispatch:Dispatch) =>{
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId:number) =>{//Санка
    return (dispatch:Dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess (userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId:number) =>{//Санка
    return (dispatch:Dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess (userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}



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