import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Massage/Message";
import React from "react";
import {DialogsPropsType} from "./DialogsContainer";


function Dialogs(props: DialogsPropsType) {
    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = state.messages.map(m => {
        return <Message message={m.message} id={m.id} key={m.id}/>
    })
    let NewMessageBody = state.newMessagesBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e:any) => {
        let body: string = e.target.value
        props.updateNewMessagesBody(body)
    }
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>
            <textarea onChange={onNewMessageChange} value={NewMessageBody}/><br/>
            <button onClick={onSendMessageClick} className={classes.button}>Send</button>
        </div>
    )
}

export default Dialogs;