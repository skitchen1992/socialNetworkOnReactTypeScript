import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.module.css';
import Profile from "./components/Profile/Profile";
import {Route} from "react-router";
import classes from "./App.module.css";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";




function App() {
    return (
            <div className={classes.wrapper}>
                <Header/>
                <Nav/>
                <div className={classes.content}>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>

    );
}


export default App;

