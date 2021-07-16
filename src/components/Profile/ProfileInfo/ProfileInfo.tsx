import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userPhoto from "../../../assets/images/2.png";
import React, {ChangeEvent,} from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import {Avatar} from "@material-ui/core";


type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }),
);

function ProfileInfo(props: ProfileInfoType) {
    const classes = useStyles();
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
            <div className={s.img1}></div>
            <div className={s.userInfo}>
                <div className={s.logo}>
                    <Avatar className={classes.large} alt="Remy Sharp" src={props.profile.photos.large || userPhoto}/>
                    {props.isOwner && <UploadButtons mainPhotoSelected={mainPhotoSelected}/>}
                </div>
                <ProfileData profile={props.profile} status={props.status}
                             updateUserStatus={props.updateUserStatus}
                             isOwner={props.isOwner}

                />

            </div>

        </div>
    )
}

type UploadButtons = {
    mainPhotoSelected: (e: any) => void
}

export const UploadButtons = (props: UploadButtons) => {
    const classes = useStyles();
    return (
        <>
            {/*            <input
                accept="image/!*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e)=>props.mainPhotoSelected(e)}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>*/}
            <input className={classes.input} id="icon-button-file" type={"file"}
                   onChange={(e) => props.mainPhotoSelected(e)}/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
            </label>
        </>
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
        <div className={s.about}>
            <div className={s.name}><span>Name: </span>{props.profile.fullName}</div>
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
        <div className={s.wrapContact}>
            <span>{props.contactTitle}</span>:<span>{props.contactValue}</span>
        </div>
    )
}

export default ProfileInfo;


