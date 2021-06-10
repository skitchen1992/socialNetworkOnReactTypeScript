import {v1} from "uuid";

export const followAC = (userId: string) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: string) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: any) => ({type: "SET-USERS", users}) as const

export type FollowACActionType = {
    type: "FOLLOW",
    userId: string
}
export type UnFollowACActionType = {
    type: "UNFOLLOW",
    userId: string
}
export type SetUsersACActionType = {
    type: "SET-USERS",
    users: any
}
export type CommonUsersReducerType = FollowACActionType | UnFollowACActionType | SetUsersACActionType


type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
    url: string

}

let initialState = {
    users: [
        {
            id: v1(),
            followed: false,
            fullName: "Nik Lav",
            status: 'Hello',
            location: {city: 'Moscow', country: "Russia"},
            url:'https://i.pinimg.com/736x/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg'
        },
        {
            id: v1(),
            followed: true,
            fullName: "Rick Sanches",
            status: 'Tra-la-la',
            location: {city: 'Moscow', country: "Russia"},
            url:'https://lh3.googleusercontent.com/proxy/RWLNDn0Z-S60KqSk-Bwbnnp3yczLexU8ZiOHdJt5gTotRRoP8-_M4mBMgBh4FY3JEqIm4v9hBRUv_ARapNepFA52zZHU0bsAOLm1ktc2TNpEcbPegnqQOIdin4HhqPUVhpw3a9MxzLZx2urPOy_BANBTrY5q6BwHxGzHLgPeLA',
        },
        {
            id: v1(),
            followed: false,
            fullName: "Morty Shmorty",
            status: "Ууу блин",
            location: {city: 'Moscow', country: "Russia"},
            url:'https://cdn.freelance.ru/images/att/1324133_900_600.png'
        },
        {
            id: v1(),
            followed: true,
            fullName: "Garry Osborn",
            status: 'Hi',
            location: {city: 'Moscow', country: "Russia"},
            url:'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg'
        },
    ] as Array<UsersType>
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