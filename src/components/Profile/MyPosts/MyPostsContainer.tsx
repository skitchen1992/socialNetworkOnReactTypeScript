import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import React from "react";
import {PostsType, StateType} from "../../../redux/store";
import StoreContext from "../../../StoreContext"
import MyPosts from "./MyPosts";
import {ReactReduxContext, useDispatch} from "react-redux";


// type MyPostsType = {
//     state: StateType
// }


function MyPostsContainer() {
    //const dispatch = useDispatch()
    return (
        <StoreContext.Consumer>{
            (store:any) => {
                let state = store.getState()
                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
             return   <MyPosts updateNewPostTextActionCreator={onPostChange} addPostActionCreator={addPost}
                         posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
            }
        }

        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;