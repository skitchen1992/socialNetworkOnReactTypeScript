import {addMessageActionCreator, updateMessages,} from "../../redux/dialogs-reducer";
import React from "react";
import {StateType} from "../../redux/store";
import {useDispatch} from "react-redux";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    state: StateType
}

function DialogsContainer(props:DialogsPropsType){
    const dispatch = useDispatch();
    let addMessage = () => {
        dispatch(addMessageActionCreator())
    }
    let onMessageChange = (body:any) => {
        let action = updateMessages(body)
        dispatch(action)
    }

    return(
        <div>
            <Dialogs state={props.state} updateMessages={onMessageChange} addMessage={addMessage }/>
        </div>



    )
}
export default DialogsContainer;