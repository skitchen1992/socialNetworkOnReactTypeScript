import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.module.css';
import Profile from "./components/Profile/Profile";
import {Route} from "react-router";
import classes from "./App.module.css";
import {StateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {


    return (
            <div className={classes.wrapper}>
                <Header/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <DialogsContainer state={props.state} />}/>
                    <Route path="/profile" render={() => <Profile state={props.state}/>}/>
                </div>
            </div>

    );
}


export default App;

