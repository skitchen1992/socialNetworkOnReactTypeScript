import React from 'react';

import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import { setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";



type MapStateToPropsType = {
    isAuth: boolean,
    login: null | string

}
type MapDispatchToPropsType = {
    setUserData: (id: string, login: string, email: string) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})//withCredentials=> отправляет на сервер куку для авторизации
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state: AppStateType ):MapStateToPropsType=> ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setUserData})(HeaderContainer);