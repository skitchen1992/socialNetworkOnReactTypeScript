import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/state";
import React from "react";


type MyPostsType = {
    posts: Array<PostsType>,
    newPostText: string,
    dispatch: (action: any) => void,
}


function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map((el) => <Post id={el.id}
                                                      message={el.message}
                                                      likesCount={el.likesCount}
    />)
    let newPostElement: any = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text: string = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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