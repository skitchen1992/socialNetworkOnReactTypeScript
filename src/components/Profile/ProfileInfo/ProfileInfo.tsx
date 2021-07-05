import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.img1}></div>
            <div className={classes.userInfo}>
                <div className={classes.logo}>
                    <img className={classes.img} src={props.profile.photos.large}></img>
                </div>

                <div className={classes.about}>
                    <div className={classes.name}>{props.profile.fullName}</div>
                    <ProfileStatus status={'fdfgdfgdf'}/>
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