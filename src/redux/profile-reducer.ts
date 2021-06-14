import {v1} from "uuid";

export const addPostActionCreator = () => ({type: "ADD-POST"}) as const
export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text}) as const
export const setUserProfile = (profile: any) => ({type: "SET-USER-PROFILE", profile}) as const

export type AddPostActionType = {
    type: "ADD-POST",
}
export type UpdateNewPostTextActionCreatorType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export type SetUserProfile = {
    type: "SET-USER-PROFILE",
    profile: any
}
export type CommonProfileReducerType = AddPostActionType | UpdateNewPostTextActionCreatorType | SetUserProfile


type PostsType = {
    id: string
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: v1(), message: "Hi", likesCount: 13},
        {id: v1(), message: "My first post", likesCount: 12},
        {id: v1(), message: "Yes", likesCount: 14},
    ] as Array<PostsType>,
    newPostText: '',
    profile: null
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: CommonProfileReducerType): InitialStateType => {
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
        default :
            return state
    }

}
export default profileReducer