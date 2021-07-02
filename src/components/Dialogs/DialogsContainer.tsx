import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: InitialStateType
    isAuth:boolean
}
type MapDispatchToPropsType = {
    updateNewMessagesBody: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessagesBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)