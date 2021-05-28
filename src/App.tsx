import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.module.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import classes from "./App.module.css";
import {addPost, StateType} from "./redux/state";

interface AppPropsType {
    state: StateType,
    addPost: any,
    updateNewPostText:any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={classes.wrapper}>
                <Header/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagesPage.dialogs}
                                                                  messages={props.state.messagesPage.messages}/>}/>
                    <Route path="/profile"
                           render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  updateNewPostText={props.updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

