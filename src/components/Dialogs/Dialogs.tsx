import s from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import React from "react";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux, FormDataType} from "./AddMessageForm/AddMessageForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
function Dialogs(props: DialogsPropsType) {
    const classes = useStyles();
    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = state.messages.map(m => {
        return   (
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    You message
                </Typography>

                <Typography variant="body2" component="p">
                    {m.message}
                    <br />

                </Typography>
            </CardContent>
        </Card>)
    })
    const addNewMessage=(values:FormDataType)=>{
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {messagesElement}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;