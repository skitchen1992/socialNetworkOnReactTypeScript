import './Profile.css';
import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {AppStateType} from "../../redux/redux-store";

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
interface MatchParams {
    userId: string;
}

type ProfileContainerPropsType = RouteComponentProps<MatchParams> & {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    isAuth:boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }


    render() {
        if (!this.props.isAuth){
            return <Redirect to={"/login"}/>
        }

        return (
            <div>
                <Profile{...this.props} profile={this.props.profile}/>
            </div>
        )
    }


}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

})



export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));