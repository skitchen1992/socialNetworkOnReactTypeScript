import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

export type InitializedSuccess = ReturnType<typeof initializedSuccess>
export type AppReducerType = InitializedSuccess
export type InitialStateType = {
    "initialized": boolean
}

const initialState: InitialStateType = {
    "initialized": false
}


export const initializedSuccess = () => ({
    type: "INITIALIZED_SUCCESS",
}) as const


export const initializeApp = () => {//санка
    return (dispatch: ThunkDispatch<AppStateType, unknown, AppReducerType | FormAction>) => {
        const promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

const appReducer = (state = initialState, action: AppReducerType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            };

        default:
            return state
    }

}
export default appReducer