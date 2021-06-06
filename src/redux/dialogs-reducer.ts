// import {ActionsType, MessagesPageType, MessagesType, StateType} from "./store";


export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"}) as const
export const updateMessages = (text: string) => ({type: "UPDATE-MESSAGE", newText: text}) as const

export type AddMessageType = ReturnType<typeof addMessageActionCreator>
export type UpDateMessageType = ReturnType<typeof updateMessages>
export type CommonDialogsReducerType = AddMessageType | UpDateMessageType

type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "By"},
        {id: 3, message: "Why"},
        {id: 4, message: "Tell me"},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: "Dim"},
        {id: 2, name: "Svetlana"},
        {id: 3, name: "Pasha"},
        {id: 4, name: "Masha"},
    ]as Array<DialogsType>,
    newMessagesText: '',
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state=initialState, action: CommonDialogsReducerType ): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessages: MessagesType = {id: 6, message: state.newMessagesText}
            state.messages.push(newMessages)
            state.newMessagesText = ''
            return state;
        case "UPDATE-MESSAGE":
            state.newMessagesText = action.newText
            return state;
        default:
            return state
    }

}
export default dialogsReducer