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


export const NewApp = () => {

    const dispatch = useDispatch()
    const initialized = useSelector((state: AppStateType) => state.app.initialized)
    useEffect(()=>{
        dispatch(initializeApp())
    },[])

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }),
    );
    const classes = useStyles();
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

/*        <div className={classes.wrapper}>
            <HeaderContainer/>
            <Nav/>
            <div className={classes.content}>
                <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <LoginPage/>}/>
            </div>
        </div>*/

/*class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className={classes.wrapper}>
                <HeaderContainer/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={WithSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)*/

/*
<div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={12}>

    </Grid>
<Grid item xs={12} sm={6}>

</Grid>
<Grid item xs={12} sm={6}>

</Grid>

</Grid>
</div>*/
