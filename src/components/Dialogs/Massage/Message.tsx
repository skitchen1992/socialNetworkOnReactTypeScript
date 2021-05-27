import classes from "../Dialogs.module.css";


type MessageType={
    message:string
    id:number,
}

export const Message:React.FC<MessageType>=(props)=>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
}