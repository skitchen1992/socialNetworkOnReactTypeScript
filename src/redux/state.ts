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
}
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: any,
    subscribe: (observer: any) => void
    dispatch: (action: any) => void,
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 13},
                {id: 2, message: "My first post", likesCount: 12},
                {id: 3, message: "Yes", likesCount: 14},
            ],
            newPostText: 'Введите текст',
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
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostsType = {id: 1, message: this._state.profilePage.newPostText, likesCount: 13}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }
}

const ADD_POST:string = "ADD-POST";
const UPDATE_NEW_POST_TEXT:string = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator =()=> ({type: ADD_POST})
export const updateNewPostTextActionCreator =(text:string)=> ({type: UPDATE_NEW_POST_TEXT, newText: text})



export default store