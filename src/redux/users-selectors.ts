import {AppStateType} from "./redux-store";

export const getUsers = (state:AppStateType) => {
    return state.usersPage
}
export  const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export  const getTotalUsersCount = (state:AppStateType) => {
    return state.usersPage.totalItemsCount
}
export  const getCurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}
export  const getIsFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}
export  const getFollowingInProgress = (state:AppStateType) => {
    return state.usersPage.followingInProgress
}



