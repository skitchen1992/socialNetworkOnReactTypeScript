import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {ProfileType} from "../components/Profile/ProfileContainer";

export const addPostActionCreator = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text}) as const
export const setUserProfile = (profile: ProfileType | null) => ({type: "SET-USER-PROFILE", profile}) as const
export const setUserStatus = (status:string) => ({type: "SET-USER-STATUS",status}) as const

export type AddPostActionType = {
    type: "ADD-POST",
}
export type UpdateNewPostTextActionCreatorType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export type SetUserProfile = {
    type: "SET-USER-PROFILE",
    profile: ProfileType | null
}
export type SetUserStatus = {
    type: "SET-USER-STATUS",
    status: string
}
export type CommonProfileReducerType = AddPostActionType | UpdateNewPostTextActionCreatorType | SetUserProfile | SetUserStatus
type PostsType = {
    id: string
    message: string
    likesCount: number
}

export const getUserProfile = (userId:number)=>{ //санка
    return (dispatch:Dispatch)=>{
        usersAPI.getProfile(userId )
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getUserStatus = (userId:number)=>{ //санка
    return (dispatch:Dispatch)=>{
        profileAPI.getUserStatus(userId )
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
}
export const updateUserStatus = (status:string)=>{ //санка
    return (dispatch:Dispatch)=>{
        profileAPI.updateStatus(status )
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setUserStatus(status))
                }

            })
    }
}
export type ProfileStateType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: null | ProfileType,
    status: string
}
let initialState: ProfileStateType = {
    posts: [
        {id: v1(), message: "Hi", likesCount: 13},
        {id: v1(), message: "My first post", likesCount: 12},
        {id: v1(), message: "Yes", likesCount: 14},
    ] as Array<PostsType>,
    newPostText: '',
    profile: null,
    status:''
}



const profileReducer = (state = initialState, action: CommonProfileReducerType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: v1(), message: state.newPostText, likesCount: 13}]
            };
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-USER-STATUS":
            return {...state,
                status: action.status}
        default :
            return state
    }

}
export default profileReducer