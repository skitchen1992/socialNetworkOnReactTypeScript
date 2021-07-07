import {addPostActionCreator} from "../../../redux/profile-reducer";
import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {ProfileStateType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: ProfileStateType
}
type MapDispatchToPropsType = {
    addPost:(newPostText:string)=>void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>{
    return{
        profilePage:state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch)=>{
    return {
        addPost:(newPostText:string)=>{
            dispatch(addPostActionCreator(newPostText))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)