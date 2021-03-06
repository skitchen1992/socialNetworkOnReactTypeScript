import profileReducer, {CommonProfileReducerType} from "./profile-reducer";
/*import dialogsReducer, {CommonDialogsReducerType} from "./dialogs-reducer";
import {v1} from "uuid";

type DialogsType = {
    id: string,
    name: string,
}
type MessagesType = {
    id: string,
    message: string,
}
type PostsType = {
    id: string,
    message: string,
    likesCount: number,
}
type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string

}
type MessagesPageType = {
    messages: Array<MessagesType>,
    dialogs: Array<DialogsType>,
    newMessagesText: string
}
type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}
type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void, //было (action: ActionsType) => void
}
type ActionsType = CommonProfileReducerType & CommonDialogsReducerType


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi", likesCount: 13},
                {id: v1(), message: "My first post", likesCount: 12},
                {id: v1(), message: "Yes", likesCount: 14},
            ],
            newPostText: '',
        },
        messagesPage: {
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "By"},
                {id: v1(), message: "Why"},
                {id: v1(), message: "Tell me"},
            ],
            dialogs: [
                {id: v1(), name: "Dim"},
                {id: v1(), name: "Svetlana"},
                {id: v1(), name: "Pasha"},
                {id: v1(), name: "Masha"},
            ],
            newMessagesText: '',
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        //this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }
}*/


