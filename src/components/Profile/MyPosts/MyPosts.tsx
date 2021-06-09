import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {MyPostsPropsType} from "./MyPostsContainer";





function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.posts.map((el) =>
        <Post id={el.id} message={el.message} likesCount={el.likesCount} key={el.id}/>)

    let newPostElement: any = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text: string = newPostElement.current.value
        props.updateNewPostText(text)

    }
    let newPostValue=props.profilePage.newPostText

    return (
        <div>
            <div className={classes.posts}>
                <div className={classes.myPosts}>My posts</div>
                <textarea onChange={onPostChange} ref={newPostElement} value={newPostValue}/><br/>
                <button onClick={onAddPost} className={classes.button}>Add Post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;