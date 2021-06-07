import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Massage/Message";
import {addMessageActionCreator, updateMessages,} from "../../redux/dialogs-reducer";
import React from "react";
import {MessagesPageType, StateType} from "../../redux/store";
import {useDispatch} from "react-redux";


type DialogsPropsType = {
    state: StateType
    updateMessages:(text: string)=>void
    addMessage:() => void
}

function Dialogs(props:DialogsPropsType){

    let dialogsElement = props.state.messagesPage.dialogs.map(el=>{
        return <DialogItem name={el.name} id={el.id}/>
    })
    let messagesElement = props.state.messagesPage.messages.map(el=>{
        return <Message message={el.message} id={el.id}/>
    })
    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e:any) => {
        let body: string = e.target.value
        props.updateMessages(body)
    }

    return(
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>
            <textarea onChange={onMessageChange} value={props.state.messagesPage.newMessagesText}/><br/>
            <button onClick={addMessage} className={classes.button}>Send</button>
        </div>



    )
}
export default Dialogs;