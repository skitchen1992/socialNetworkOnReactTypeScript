import React from 'react';
import {Field, WrappedFieldProps} from "redux-form";
import s from "./FormsControls.module.css"


export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error
    const finalStyle = `${isError ? s.textareaError : ''} ${s.textarea}`
    return (
        <div>
            <textarea className={finalStyle} {...input} {...props}/>
            {isError && <div className={s.error}>{meta.error}</div>}
        </div>
    );
};

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error
    const finalStyle = `${isError ? s.textareaError : ''} ${s.textarea}`
    return (
        <div>
            <input className={finalStyle} {...input} {...props}/>
            {isError && <div className={s.error}>{meta.error}</div>}
        </div>
    );
};

export const createField = (placeholder:string, name:string, validators:any, component:any, props = {}) => {
    return (
        <>
            <Field placeholder={placeholder}
                   name={name}
                   validate={validators}
                   component={component}
                   {...props}
            />
        </>
    );
};

