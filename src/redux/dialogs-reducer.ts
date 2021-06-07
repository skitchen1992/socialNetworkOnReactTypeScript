import {v1} from "uuid";

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"}) as const
export const updateMessages = (text: string) => ({type: "UPDATE-MESSAGE", newText: text}) as const

export type AddMessageType = ReturnType<typeof addMessageActionCreator>
export type UpDateMessageType = ReturnType<typeof updateMessages>
export type CommonDialogsReducerType = AddMessageType | UpDateMessageType

type MessagesType = {
    id: string
    message: string
}
type DialogsType = {
    id: string
    name: string
}
let initialState = {
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "By"},
        {id: v1(), message: "Why"},
        {id: v1(), message: "Tell me"},
    ] as Array<MessagesType>,
    dialogs: [
        {id: v1(), name: "Dim"},
        {id: v1(), name: "Svetlana"},
        {id: v1(), name: "Pasha"},
        {id: v1(), name: "Masha"},
    ] as Array<DialogsType>,
    newMessagesText: '',
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: CommonDialogsReducerType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessages: MessagesType = {id: v1(), message: state.newMessagesText}
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