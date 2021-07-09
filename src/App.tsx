import React, {Component} from 'react';
import './App.module.css';
import Nav from "./components/Nav/Nav";
import './App.module.css';
import {Route, RouteComponentProps, withRouter} from "react-router";
import classes from "./App.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./redux/auth-reducer";
import {compose} from "redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "./redux/profile-reducer";
import withAuthRedirect from "./hoc/withAuthRedirect";



type MapDispatchToPropsType = {
    getAuthUserData:()=>void
}

export type AppPropsType = MapDispatchToPropsType

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <HeaderContainer/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(null, {getAuthUserData})
)(App)

