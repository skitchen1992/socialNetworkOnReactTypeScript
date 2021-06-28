export const setUserData = (id: string, login: string, email: string) => ({
    type: "SET_USER_DATA",
    data: {id, login, email}
}) as const


export type SetUserData = ReturnType<typeof setUserData>

export type CommonDialogsReducerType = SetUserData

export type InitialStateType = {
    "id": null | string
    "login": null | string
    "email": null | string
    "isAuth": boolean
}

let initialState:InitialStateType = {
    "id": null,
    "login": null,
    "email": null,
    "isAuth": false
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