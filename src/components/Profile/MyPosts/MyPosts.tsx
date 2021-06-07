import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {PostsType} from "../../../redux/store";


type MyPostsType = {
    posts: Array<PostsType>,
    newPostText: string,
    updateNewPostTextActionCreator: (text: string) => void;
    addPostActionCreator: () => void

}


function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map((el) => <Post id={el.id}
                                                      message={el.message}
                                                      likesCount={el.likesCount}
    />)

    let newPostElement: any = React.createRef();
    let onAddPost = () => {
        props.addPostActionCreator()
    }
    let onPostChange = () => {
        let text: string = newPostElement.current.value
        props.updateNewPostTextActionCreator(text)

    }

    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.myPosts}>My posts</div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/><br/>
                <button onClick={onAddPost} className={classes.button}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;