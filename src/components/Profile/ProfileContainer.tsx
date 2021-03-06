import './Profile.css';
import React from "react";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, ProfileType, savePhoto, updateUserStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router";
import {AppStateType} from "../../redux/redux-store";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import s from "./ProfileContainer.module.css"

type mapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string | null
    isAuth: boolean
}

interface MatchParams {
    userId: string;
}

type ProfileContainerPropsType = RouteComponentProps<MatchParams> & {
    profile: ProfileType | null
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    isAuth: boolean
    status: string
    authorizedUserId: string | null
    savePhoto: (file: File) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId!
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(+userId)
        this.props.getUserStatus(+userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }


    render() {
        return (
            <div className={s.wrapper}>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }


}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth


})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)





