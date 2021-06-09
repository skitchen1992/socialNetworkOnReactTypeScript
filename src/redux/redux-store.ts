import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store