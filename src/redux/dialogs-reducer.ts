import {v1} from "uuid";

export const sendMessageCreator = () => ({type: "ADD-MESSAGE"}) as const
export const updateNewMessageBodyCreator = (body: string) => ({type: "UPDATE-MESSAGE", newText: body}) as const

export type AddMessageType = ReturnType<typeof sendMessageCreator>
export type UpDateMessageType = ReturnType<typeof updateNewMessageBodyCreator>
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
    newMessagesBody: '',
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: CommonDialogsReducerType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                newMessagesBody: '',
                messages: [...state.messages, {id: v1(), message: state.newMessagesBody}]
            };
        case "UPDATE-MESSAGE":
            return {...state, newMessagesBody: action.newText};
        default:
            return state
    }

}
export default dialogsReducer