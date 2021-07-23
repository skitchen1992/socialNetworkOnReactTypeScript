import React, {useEffect} from 'react';
import './App.module.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import WithSuspense from "./hoc/WithSuspense";
import {Container, Grid, Paper,} from "@material-ui/core";
import classes from "./components/Users/UsersContainer.module.css";


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
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return !initialized
        ? <div className={classes.loaderPoz}>
            <div className={classes.loader}>
                <Preloader/>
            </div>
        </div>

        : (
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={3}>
                            <HeaderContainer/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2} sm={3}>
                        <Paper elevation={3}>
                            <Nav/>
                        </Paper>
                    </Grid>
                    <Grid item xs={10} sm={9}>
                        <Paper elevation={3}>
                            <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                            <Route exact path={["/profile/:userId?","/"]} render={WithSuspense(ProfileContainer)}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <LoginPage/>}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>


        )
}

/*
{["/profile/:userId?" , "*"]}*/
