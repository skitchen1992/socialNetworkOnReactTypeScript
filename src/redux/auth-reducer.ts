import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type SetUserData = ReturnType<typeof setUserData>
export type GetCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>
export type CommonAuthReducerType = SetUserData | GetCaptchaUrlSuccess
export type InitialStateType = {
    "id": null | string
    "login": null | string
    "email": null | string
    "isAuth": boolean
    "captchaUrl": null | string
}

const initialState: InitialStateType = {
    "id": null,
    "login": null,
    "email": null,
    "isAuth": false,
    "captchaUrl": null
}


export const setUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: "SET_USER_DATA",
    payload: {id, login, email, isAuth}
}) as const
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: "GET_CAPTCHA_URL_SUCCESS",
    payload: captchaUrl
}) as const

export const getAuthUserData = () => async (dispatch: Dispatch) => {//санка
    const response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean,captcha:string) =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, CommonAuthReducerType | FormAction>) => {//санка
        const response = await authAPI.login(email, password, rememberMe,captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }


    }
export const logout = () => async (dispatch: Dispatch) => {//санка
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch: Dispatch) => {//санка
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

const authReducer = (state = initialState, action: CommonAuthReducerType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            };
        case "GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                captchaUrl:action.payload
            };
        default:
            return state
    }

}
export default authReducer