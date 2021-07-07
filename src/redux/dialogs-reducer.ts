import {v1} from "uuid";

export const sendMessageCreator = (newMessageBody:string) => ({type: "ADD-MESSAGE",newMessageBody}) as const
export type AddMessageType = ReturnType<typeof sendMessageCreator>
export type CommonDialogsReducerType = AddMessageType

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

}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: CommonDialogsReducerType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageBody}]
            };
        default:
            return state
    }

}
export default dialogsReducer