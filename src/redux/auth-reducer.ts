import {authAPI} from "../api/api";
import {Dispatch} from "redux";

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


export const setUserData = (id: string, login: string, email: string) => ({
    type: "SET_USER_DATA",
    data: {id, login, email}
}) as const


export const getAuthUserData = () =>{//санка
  return (dispatch:Dispatch) =>{
      authAPI.me()
          .then(response => {
              if (response.data.resultCode === 0) {
                  let {id, login, email} = response.data.data
                  dispatch(setUserData(id, email, login))
              }
          })
  }
}

const authReducer = (state = initialState, action: CommonDialogsReducerType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state
    }

}
export default authReducer