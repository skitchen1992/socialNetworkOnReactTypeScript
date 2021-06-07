import {addMessageActionCreator, updateMessages,} from "../../redux/dialogs-reducer";
import React from "react";
import {StateType} from "../../redux/store";
import {useDispatch} from "react-redux";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext"


// type DialogsPropsType = {
//     state: StateType
// }

function DialogsContainer(){
   // const dispatch = useDispatch();

    return(
        <StoreContext.Consumer>{(store:any)=>{
            let state = store.getState()
            let addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }
            let onMessageChange = (body:any) => {
                let action = updateMessages(body)
                store.dispatch(action)
            }


            return  <Dialogs state={state} updateMessages={onMessageChange} addMessage={addMessage }/>
        }}

        </StoreContext.Consumer>



    )
}
export default DialogsContainer;