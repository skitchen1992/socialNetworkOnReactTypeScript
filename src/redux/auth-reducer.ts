import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type SetUserData = ReturnType<typeof setUserData>
export type CommonDialogsReducerType = SetUserData
export type InitialStateType = {
    "id": null | string
    "login": null | string
    "email": null | string
    "isAuth": boolean
}

const initialState:InitialStateType = {
    "id": null,
    "login": null,
    "email": null,
    "isAuth": false
}


export const setUserData = (id: string | null, login: string | null, email: string | null,isAuth:boolean) => ({
    type: "SET_USER_DATA",
    payload: {id, login, email,isAuth}
}) as const


export const getAuthUserData = () =>{//санка
  return (dispatch:Dispatch) =>{
      authAPI.me()
          .then(response => {
              if (response.data.resultCode === 0) {
                  let {id, login, email} = response.data.data
                  dispatch(setUserData(id, email, login,true))
              }
          })
  }
}



export const login = (email:string, password:string, rememberMe:boolean)=>{//санка
    return (dispatch: ThunkDispatch<AppStateType, unknown, CommonDialogsReducerType | FormAction>) =>{
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
                }else{
                   let message =  response.data.message.length > 0 ? response.data.message[0] : "Some error"
                    dispatch(stopSubmit('login',{_error:message}))
                }
            })
    }
}
export const logout = () =>{//санка
    return (dispatch:Dispatch) =>{
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null,false))
                }
            })
    }
}

const authReducer = (state = initialState, action: CommonDialogsReducerType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state
    }

}
export default authReducer