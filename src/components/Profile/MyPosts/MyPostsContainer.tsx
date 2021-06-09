import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {InitialStateType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: InitialStateType
}
type MapDispatchToPropsType = {
    updateNewPostText:(body:string)=>void
    addPost:()=>void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>{
    return{
        profilePage:state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch)=>{
    return {
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)