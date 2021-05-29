import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.module.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router";
import classes from "./App.module.css";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch:(action:any)=> void,
}

function App(props: AppPropsType) {
    return (
            <div className={classes.wrapper}>
                <Header/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagesPage.dialogs}
                                                                  messages={props.state.messagesPage.messages}/>}/>
                    <Route path="/profile"
                           render={() => <Profile posts={props.state.profilePage.posts} dispatch={props.dispatch}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  />}/>
                </div>
            </div>

    );
}


export default App;

