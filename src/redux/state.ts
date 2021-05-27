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

}
export type MessagesPageType = {
    messages: Array<MessagesType>,
    dialogs: Array<DialogsType>,
}
export type StateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi", likesCount: 13},
            {id: 2, message: "My first post", likesCount: 12},
            {id: 3, message: "Yes", likesCount: 14},
        ],
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
}

export default state