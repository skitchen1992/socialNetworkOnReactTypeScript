import React from 'react';
import s from "../Login/Login.module.css"
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean



}
type MapStateToPropsType = {
    isAuth: boolean,
    captchaUrl:string | null

}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const Login = (props: UsersPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <LoginReduxForm onSubmit={onSubmit} />
    );
};
type bla = {
    captchaUrl: string | null
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.wrapper}>
                <div className={s.wrap}>
                    <h3>Login</h3>
                    <Field className={s.input} placeholder={"Email"} name={'email'} component={Input}
                           validate={[required]}/>
                    <Field className={s.input} placeholder={"Password"} name={'password'} type={"password"}
                           component={Input} validate={[required]}/>
                    <div className={s.wrapCheckBox}>
                        <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
                        <div>Remember me</div>
                    </div>
                    {props.error && <div className={s.error}>{props.error}</div>}
                    <button className={s.button}>Login</button>
                </div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl

})

export default connect(mapStateToProps, {login})(Login);