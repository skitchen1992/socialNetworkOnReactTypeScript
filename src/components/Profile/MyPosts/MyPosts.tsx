import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../redux/state";
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
        props.dispatch({type: "ADD-POST"})
    }
    let onPostChange = () => {
        let text: string = newPostElement.current.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
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