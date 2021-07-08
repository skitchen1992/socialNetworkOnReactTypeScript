import './Post.module.css';


type PostType = {
    id:string ,
    message:string,
    likesCount:number,
}
function Post(props: PostType ){

    return(
        <div>
            <div className="post">
                <div className="post__circle"/>
                <p>{props.message}</p>
            </div>
            <div>Like{props.likesCount}</div>
        </div>
    )
}
export default Post;