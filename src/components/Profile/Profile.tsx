import './Profile.css';

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";
import {Redirect} from "react-router";
import React from "react";

type ProfileTypeProps = {
    profile: ProfileType | null

}


function Profile(props:ProfileTypeProps) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;