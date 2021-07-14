import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userPhoto from "../../../assets/images/2.png";
import React, {ChangeEvent, useState, WeakValidationMap} from "react";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {Contacts, ProfileType} from "../../../redux/profile-reducer";
import {reduxForm} from "redux-form";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e?.target?.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return !props.profile ? null : (
        <div>
            <div className={classes.img1}></div>
            <div className={classes.userInfo}>
                <div className={classes.logo}>
                    <img className={classes.img} src={props.profile.photos.large || userPhoto}></img>
                    {props.isOwner && <input onChange={mainPhotoSelected} type={"file"}/>}
                </div>
                <ProfileData profile={props.profile} status={props.status}
                             updateUserStatus={props.updateUserStatus}
                             isOwner={props.isOwner}

                />

            </div>
        </div>
    )
}

type ProfileDataType = {
    profile: any
    status: string
    updateUserStatus: (status: string) => void
    isOwner?: boolean
}
const ProfileData = (props: ProfileDataType) => {
    return (
        <div className={classes.about}>
            <div className={classes.name}><span>Name: </span>{props.profile.fullName}</div>
            <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            <div>
                <span>Contact: </span>{Object.keys(props.profile.contacts).map((key: string) => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key] as any}/>
            })}
            </div>
        </div>
    )
}

type ContactType = {
    contactTitle: any
    contactValue: string
}
const Contact = (props: ContactType) => {
    return (
        <div>
            <span>{props.contactTitle}</span>:<span>{props.contactValue}</span>
        </div>
    )
}

export default ProfileInfo;
{/*                    <p>Date of Birth:<span>2 january</span></p>
                    <p>City:<span>Moscow</span></p>
                    <p>Education:<span>BSU 11</span></p>
                    <p>WEB
                        Site:<span>{props.profile.contacts.website != null ? props.profile.contacts.website : " Сайта нет"}</span>
                    </p>*/
}