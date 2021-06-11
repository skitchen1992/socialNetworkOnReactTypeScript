import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from "./Users.module.css";
import axios from "axios";
import {InitialStateType} from "../../redux/users-reducer";
import userPhoto from '../../../src/assets/images/2.png';
import s from './Users.module.css';

type GetTasksResponseType = {
    items: InitialStateType
    totalCount: number
    error: string | null
}


class Users extends React.Component<UsersPropsType, GetTasksResponseType> {
    componentDidMount() {
        axios.get<GetTasksResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get<GetTasksResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {this.props.users.users.map((u) =>
                    <div className={classes.container} key={u.id}>
                        <div className={classes.wrap}>
                            <div><img className={classes.avatar}
                                      src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}
                                        className={classes.button}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}
                                        className={classes.button}>Follow</button>}
                        </div>

                        <div className={classes.wrapper}>
                            <div className={classes.top}>
                                <div className={classes.name}>{u.name}</div>
                                <div className={classes.country}>{"u.location.country"}</div>
                            </div>
                            <div className={classes.footer}>
                                <div className={classes.status}>{u.status}</div>
                                <div className={classes.city}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    {pages.map(p => this.props.currentPage === p ? <span onClick={(e)=>{this.onPageChanged(p)}} className={s.selectedPage}>{p}</span> :
                        <span onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>)}

                    {/*//return <span className={this.props.currentPage === p && s.selectedPage}>{p}</span>*/}
                </div>
            </div>
        );
    }
}


export default Users;