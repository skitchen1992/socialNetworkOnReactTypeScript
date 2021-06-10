import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import Users from "./users";


type MapStateToPropsType = {
    users: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: any) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);