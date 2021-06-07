import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType, StateType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType={
    state: StateType
}
function Profile(props:ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state}/>
        </div>
    )
}

export default Profile;