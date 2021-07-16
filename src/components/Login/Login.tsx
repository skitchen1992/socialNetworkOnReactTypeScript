import React from 'react';
import s from "../Login/Login.module.css"
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import {AppStateType} from "../../redux/redux-store";

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean

    captcha: string
}
type MapStateToPropsType = {
    isAuth: boolean,
    captchaUrl: string | null

}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


const Login = (props: UsersPropsType) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        console.log(formData.captcha)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    );
};

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
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
                    {props.captchaUrl && <img src={props.captchaUrl}/>}
                    {props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
                    <div className={s.info}>Для входа воспользуйтесь тестовым аккаунтом</div>
                    <div>Email: skitchen1992@gmail.com</div>
                    <div>Password: 2n4i4k1i</div>
                </div>
            </div>

        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})

export default connect(mapStateToProps, {login})(Login);