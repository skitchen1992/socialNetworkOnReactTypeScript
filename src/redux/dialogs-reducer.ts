import {ActionsType, MessagesPageType, MessagesType, StateType} from "./state";


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessages = (text: string) => ({type: UPDATE_MESSAGE, newText: text})

const ADD_MESSAGE: string = "ADD-MESSAGE";
const UPDATE_MESSAGE: string = "UPDATE-MESSAGE";


const dialogsReducer = (state:any, action:ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessages: MessagesType = {id: 6, message: state.newMessagesText}
            state.messages.push(newMessages)
            state.newMessagesText = ''
            return state;
        case UPDATE_MESSAGE:
            state.newMessagesText = action.newText
            return state;
        default:
            return state
    }

}
export default dialogsReducer