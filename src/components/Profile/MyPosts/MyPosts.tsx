import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import React from "react";
import {PostsType} from "../../../redux/store";
import { useDispatch} from "react-redux";



type MyPostsType = {
    posts: Array<PostsType>,
    newPostText: string,
}


function MyPosts(props: MyPostsType) {
    const dispatch = useDispatch();
    let postsElements = props.posts.map((el) => <Post id={el.id}
                                                      message={el.message}
                                                      likesCount={el.likesCount}
    />)
    let newPostElement: any = React.createRef();
    let addPost = () => {
        dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text: string = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }

    return (
        <div>

                <div className={classes.posts}>
                    <div className={classes.myPosts}>My posts</div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/><br/>
                    <button onClick={addPost} className={classes.button}>Add Post</button>
                </div>
                {postsElements}

        </div>
    )
}

export default MyPosts;