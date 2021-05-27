import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsType} from "../../../redux/state";


type MyPostsType = {
    posts: Array<PostsType>
}


function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map((el) => <Post id={el.id}
                                                      message={el.message}
                                                      likesCount={el.likesCount}
    />)
    return (
        <div>
            <div className="content__posts">
                <div className="content__posts__myPosts">My posts</div>
                <textarea> &lt;TEXTAREA&gt; </textarea><br/>
                <button className={classes.button}>SEND</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;