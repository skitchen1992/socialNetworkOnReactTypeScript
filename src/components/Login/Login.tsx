import React from 'react';
import s from "../Login/Login.module.css"
import {reduxForm, Field, InjectedFormProps} from "redux-form";

const Login = () => {
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean

}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.wrapper}>
                <div className={s.wrap}>
                    <h3>Login</h3>
                    <Field className={s.input} placeholder={"Login"} name={'login'} component={'input'}/>
                    <Field className={s.input} placeholder={"Password"} name={'password'} component={'input'}/>
                    <div className={s.wrapCheckBox}>
                        <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
                        <div>Remember me</div>
                    </div>
                    <button className={s.button}>Login</button>
                </div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

export default Login;