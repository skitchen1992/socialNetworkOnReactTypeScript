import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type ProfileType={
    posts: Array<PostsType>,
    addPost: ()=> void,
    newPostText:string,
    updateNewPostText: (text: string) => void,
}
function Profile(props:ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;