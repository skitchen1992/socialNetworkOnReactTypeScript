import './Profile.css';
import React from "react";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {AppStateType} from "../../redux/redux-store";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null | string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null | string,
        "github": string,
        "mainLink": null | string
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }

}
type mapStateToPropsType = {
    profile: ProfileType | null
    status:string
    authorizedUserId: string | null
    isAuth:boolean
}
interface MatchParams {
    userId: string;
}

type ProfileContainerPropsType = RouteComponentProps<MatchParams> & {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    getUserStatus:(userId: number) => void
    updateUserStatus:(status:string)=>void
    isAuth: boolean
    status:string
    authorizedUserId: string |null
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId!
        }
        this.props.getUserProfile(+userId)
        this.props.getUserStatus(+userId)
    }


    render() {
        return (
            <div>
                <Profile{...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
            </div>
        )
    }


}
let mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth:state.auth.isAuth


})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getUserStatus,updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)





