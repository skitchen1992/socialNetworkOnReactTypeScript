import './Profile.css';
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile{...this.props} profile={this.props.profile}/>
            </div>
        )
    }


}
let mapStateToProps = (state:any)=>({
    profile: state.profilePage.profile

})

export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);