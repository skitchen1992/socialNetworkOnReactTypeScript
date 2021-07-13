import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import {ProfileStatusHooks} from "./ProfileStatusHooks";
import userPhoto from "../../../assets/images/2.png";
import {ChangeEvent} from "react";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto:(file: File)=>void
}

function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected=(e: ChangeEvent<HTMLInputElement>)=>{
        if(e?.target?.files?.length){
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={classes.img1}></div>
            <div className={classes.userInfo}>
                <div className={classes.logo}>
                    <img className={classes.img} src={props.profile.photos.large || userPhoto}></img>
                    {props.isOwner && <input onChange={mainPhotoSelected} type={"file"}/>}
                </div>

                <div className={classes.about}>
                    <div className={classes.name}>{props.profile.fullName}</div>
                    <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    <p>Date of Birth:<span>2 january</span></p>
                    <p>City:<span>Moscow</span></p>
                    <p>Education:<span>BSU 11</span></p>
                    <p>WEB
                        Site:<span>{props.profile.contacts.website != null ? props.profile.contacts.website : " Сайта нет"}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;