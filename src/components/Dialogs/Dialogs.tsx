import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Massage/Message";
import {DialogsType, MessagesType,} from "../../redux/state";


type DialogsPropsType = {
    dialogs: Array<DialogsType>,
    messages:Array<MessagesType>
}

function Dialogs(props:DialogsPropsType){

    let dialogsElement = props.dialogs.map(el=>{
        return <DialogItem name={el.name} id={el.id}/>
    })

    let messagesElement = props.messages.map(el=>{
        return <Message message={el.message} id={el.id}/>
    })
    return(

        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>


    )
}
export default Dialogs;