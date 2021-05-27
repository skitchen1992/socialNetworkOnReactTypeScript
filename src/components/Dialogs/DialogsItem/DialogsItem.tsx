import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemType={
    name:string
    id:number,
}

export const DialogItem:React.FC<DialogItemType> = (props)=>{
    let path = `/dialogs/${props.id}`
    return(
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}