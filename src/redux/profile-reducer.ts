import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ProfileType} from "../components/Profile/ProfileContainer";

export const addPostActionCreator = (newPostText: string) => ({type: "ADD-POST", newPostText}) as const
export const setUserProfile = (profile: ProfileType | null) => ({type: "SET-USER-PROFILE", profile}) as const
export const setUserStatus = (status: string) => ({type: "SET-USER-STATUS", status}) as const
export const savePhotoSuccess = (photos: SavePhotoSuccess) => ({type: "SAVE-PHOTO-SUCCESS", photos}) as const
export type AddPostActionType = {
    type: "ADD-POST",
    newPostText: string
}

export type SetUserProfile = {
    type: "SET-USER-PROFILE",
    profile: ProfileType | null
}
export type SetUserStatus = {
    type: "SET-USER-STATUS",
    status: string
}
export type SavePhotoSuccess = {
    type: "SAVE-PHOTO-SUCCESS",
    photos: any
}

export type CommonProfileReducerType = AddPostActionType | SetUserProfile | SetUserStatus | SavePhotoSuccess
export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => { //санка
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => { //санка
    const response = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(response.data))
}
export const updateUserStatus = (status: string)=> async (dispatch: Dispatch) => { //санка

    const response = await profileAPI.updateStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
}
export const savePhoto = (file: File )=> async (dispatch: Dispatch) => { //санка
    const response = await profileAPI.savePhoto(file)
    if (response?.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export type ProfileStateType = {
    posts: Array<PostsType>,
    profile: null | ProfileType,
    status: string
}
let initialState: ProfileStateType = {
    posts: [
        {id: v1(), message: "Hi", likesCount: 13},
        {id: v1(), message: "My first post", likesCount: 12},
        {id: v1(), message: "Yes", likesCount: 14},
    ] as Array<PostsType>,
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action: CommonProfileReducerType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: v1(), message: action.newPostText, likesCount: 13}]
            };
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }
        case "SAVE-PHOTO-SUCCESS":
            return {
                ...state,
                profile: state.profile ? {...state.profile, photos: action.photos} : state.profile
            }
        default :
            return state
    }
}
export default profileReducer