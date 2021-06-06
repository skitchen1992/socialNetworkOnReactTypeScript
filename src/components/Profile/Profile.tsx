import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostsType} from "../../redux/store";

type ProfileType={
    posts: Array<PostsType>,
    newPostText:string,
    dispatch:(action: any) => void//было (action: ActionsType) => void

}
function Profile(props:ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>
    )
}

export default Profile;