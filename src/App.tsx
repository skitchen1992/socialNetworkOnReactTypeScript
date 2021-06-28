import React from 'react';
import './App.module.css';

import Nav from "./components/Nav/Nav";
import './App.module.css';
import {Route} from "react-router";
import classes from "./App.module.css";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";




function App() {
    return (
            <div className={classes.wrapper}>
                <HeaderContainer/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
    );
}


export default App;

