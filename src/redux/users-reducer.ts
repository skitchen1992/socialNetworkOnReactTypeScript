

export const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: any) => ({type: "SET-USERS", users}) as const

export type FollowACActionType = {
    type: "FOLLOW",
    userId: number
}
export type UnFollowACActionType = {
    type: "UNFOLLOW",
    userId: number
}
export type SetUsersACActionType = {
    type: "SET-USERS",
    users: any
}
export type CommonUsersReducerType = FollowACActionType | UnFollowACActionType | SetUsersACActionType



type UsersType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string,
    "photos": {
        "small": string,
        "large": string,
    },
    "status": string,
    "followed": boolean
}

let initialState = {
    users: [] as Array<UsersType>
}
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: CommonUsersReducerType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {...state,users:[...state.users,...action.users] }
        default :
            return state
    }

}
export default usersReducer