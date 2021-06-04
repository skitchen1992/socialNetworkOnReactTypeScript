import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

export type DialogsType = {
    id: number,
    name: string,
}
export type MessagesType = {
    id: number,
    message: string,
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}
export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string

}
export type MessagesPageType = {
    messages: Array<MessagesType>,
    dialogs: Array<DialogsType>,
    newMessagesText: string
}
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void,
}
export type ActionsType = AddPostActionType & ReturnType<typeof updateNewPostTextActionCreator>
export  type AddPostActionType = ReturnType<typeof addPostActionCreator>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 13},
                {id: 2, message: "My first post", likesCount: 12},
                {id: 3, message: "Yes", likesCount: 14},
            ],
            newPostText: '',
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "By"},
                {id: 3, message: "Why"},
                {id: 4, message: "Tell me"},
            ],
            dialogs: [
                {id: 1, name: "Dim"},
                {id: 2, name: "Svetlana"},
                {id: 3, name: "Pasha"},
                {id: 4, name: "Masha"},
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
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber()
    }
}











export default store