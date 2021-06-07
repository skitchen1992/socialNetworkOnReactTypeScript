import {v1} from "uuid";

export const addPostActionCreator = () => ({type: "ADD-POST"})
export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text})


export type AddPostActionType = {
    type: "ADD-POST",
}
export type UpdateNewPostTextActionCreatorType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export type CommonProfileReducerType = AddPostActionType | UpdateNewPostTextActionCreatorType


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
}
export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: CommonProfileReducerType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {id: v1(), message: state.newPostText, likesCount: 13}
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            debugger
        return {...state, newPostText: action.newText}
            // state.newPostText = action.newText
            // return state;
        default :
            return state
    }

}
export default profileReducer