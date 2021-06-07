import './Profile.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType, StateType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


// type ProfileType={
//     state: StateType
// }
function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;