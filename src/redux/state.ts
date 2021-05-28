

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

let rerenderEntireTree=()=>{
}

let state: StateType = {
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
}
export let addPost = () => {
    let newPost: PostsType = {id: 1, message: state.profilePage.newPostText, likesCount: 13}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree()
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}
export const subscribe=(observer:any)=>{
    rerenderEntireTree=observer
}

export default state