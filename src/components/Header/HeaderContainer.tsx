import React from 'react';

import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean,
    login: null | string

}
type MapDispatchToPropsType = {
    logout: () => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<UsersPropsType> {


    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {logout})(HeaderContainer);