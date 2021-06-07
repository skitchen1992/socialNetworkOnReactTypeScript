import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import React from "react";
import {PostsType, StateType} from "../../../redux/store";

import MyPosts from "./MyPosts";
import {useDispatch} from "react-redux";


type MyPostsType = {
    state: StateType
}


function MyPostsContainer(props: MyPostsType) {
    const dispatch = useDispatch()

    let onPostChange = (text: string) => {
       dispatch(updateNewPostTextActionCreator(text))
    }
  let addPost = () => {
        dispatch(addPostActionCreator())
  }
    return (
        <MyPosts updateNewPostTextActionCreator={onPostChange} addPostActionCreator={addPost}
                 posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;