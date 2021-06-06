import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/store";

type ProfileType={
    posts: Array<PostsType>,
    newPostText:string,


}
function Profile(props:ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  newPostText={props.newPostText} />
        </div>
    )
}

export default Profile;