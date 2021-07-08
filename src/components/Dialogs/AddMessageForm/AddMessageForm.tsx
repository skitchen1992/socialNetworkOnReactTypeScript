import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import classes from "../Dialogs.module.css";

export type FormDataType = {
    newMessageBody: string

}
const maxLength50 = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody"
                       placeholder="Ввидите сообщение"/>
                <div>
                    <button className={classes.button}>Send</button>
                </div>
            </form>
        </>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)