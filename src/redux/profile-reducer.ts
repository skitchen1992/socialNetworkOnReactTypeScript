

export const addPostActionCreator = () => ({type: "ADD-POST"})
export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text})


export type AddPostActionType = {
        type: "ADD-POST",
}
export type UpdateNewPostTextActionCreator = {
        type: "UPDATE-NEW-POST-TEXT",
        newText: string
}
export type CommonProfileReducerType = AddPostActionType | UpdateNewPostTextActionCreator



type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: "Hi", likesCount: 13},
        {id: 2, message: "My first post", likesCount: 12},
        {id: 3, message: "Yes", likesCount: 14},
    ] as Array<PostsType>,
    newPostText: '',
}
export type InitialStateType = typeof initialState

const profileReducer = (state= initialState, action: CommonProfileReducerType): InitialStateType  => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {id: 1, message: state.newPostText, likesCount: 13}
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state;
        default :
            return state
    }

}
export default profileReducer