import axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import userPhoto from "../../assets/images/User-Profile.png"
import {UsersPropsType} from "./UsersContainer";

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged=(currentPage: number)=>{
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

}
    render() {
        const pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span className={this.props.usersPage.currentPage === p ? s.selected : ''}
                                  onClick={(e)=>{this.onPageChanged(p)}}>
                                {p}
                            </span>
                        )
                    })}
                        </div>
                    {
                        this.props.usersPage.users.map(u => <div key={u.id}>
                        <div>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto}
                        className={s.userPhoto}/></div>
                        <div>{u.followed
                        ? <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Follow</button>
                        : <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Unfollow</button>
                    }
                        </div>
                        </div>
                        <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        </div>
                        <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                        </div>
                        </div>
                        )

                    }
                        </div>
                        );
                    }
                        }

                        export default Users;