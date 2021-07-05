import './Profile.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";

import React from "react";

type ProfileTypeProps = {
    profile: ProfileType | null
    status:string
    updateUserStatus:(status:string)=>void

}


function Profile(props:ProfileTypeProps) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;