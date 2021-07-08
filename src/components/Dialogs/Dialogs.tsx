import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Massage/Message";
import React from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, FormDataType} from "./AddMessageForm/AddMessageForm";


function Dialogs(props: DialogsPropsType) {
    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = state.messages.map(m => {
        return <Message message={m.message} id={m.id} key={m.id}/>
    })
    const addNewMessage=(values:FormDataType)=>{
        props.sendMessage(values.newMessageBody)
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
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;