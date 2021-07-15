import React, {Component, useEffect} from 'react';
import './App.module.css';
import Nav from "./components/Nav/Nav";
import './App.module.css';
import {Route, withRouter} from "react-router";
import classes from "./App.module.css";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, useDispatch, useSelector} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import WithSuspense from "./hoc/WithSuspense";
import {Container, createStyles, Grid, makeStyles, Paper, Theme, withStyles} from "@material-ui/core";
import {inspect} from "util";



type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean

}
export type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


export const App = () => {

    const dispatch = useDispatch()
    const initialized = useSelector((state: AppStateType) => state.app.initialized)
    useEffect(()=>{
        dispatch(initializeApp())
    },[])

    return !initialized ? <Preloader/> : (

        <Container fixed>

            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <HeaderContainer/>
                    </Paper  >
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Paper elevation={3} >
                        <Nav/>
                    </Paper  >
                </Grid>
                <Grid item xs={9} sm={9}>
                    <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                </Grid>
            </Grid >

        </Container>


    )
}

