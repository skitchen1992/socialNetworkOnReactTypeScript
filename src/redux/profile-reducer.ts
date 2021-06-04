import {ActionsType, PostsType,} from "./state";

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

const ADD_POST: string = "ADD-POST";
const UPDATE_NEW_POST_TEXT: string = "UPDATE-NEW-POST-TEXT";

//type A =ProfilePageType

const profileReducer = (state:any ,action:ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {id: 1, message: state.newPostText, likesCount: 13}
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default :
            return state
    }

}
export default profileReducer