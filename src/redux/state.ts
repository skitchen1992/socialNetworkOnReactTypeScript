
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
export type StoreType={
    _state:StateType,
    getState:()=> StateType,
    _callSubscriber:any,
    addPost: ()=> void,
    updateNewPostText:(text: string) => void,
    subscribe: (observer: any)=> void
}

let store:StoreType={
    _state:{
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
    getState(){
        return this._state
    },
    _callSubscriber(){
    },
    addPost(){
        let newPost: PostsType = {id: 1, message: this._state.profilePage.newPostText, likesCount: 13}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber()
    },
    updateNewPostText(newText: string){
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer:any){
        this._callSubscriber=observer
    },

}


export default store