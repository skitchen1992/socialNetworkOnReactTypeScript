import './Profile.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

import React from "react";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileTypeProps = {
    profile: ProfileType | null
    status:string
    updateUserStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(file: File)=>void
}


function Profile(props:ProfileTypeProps) {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;