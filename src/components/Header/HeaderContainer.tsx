import React from 'react';

import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";




type MapStateToPropsType = {
    isAuth: boolean,
    login: null | string

}
type MapDispatchToPropsType = {
    getAuthUserData:()=>void
    logout:()=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state: AppStateType ):MapStateToPropsType=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {getAuthUserData,logout })(HeaderContainer);