import React from 'react';
import s from './Users.module.css'
import userPhoto from "../../assets/images/User-Profile.png"
import {UserType} from "../../Redax/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersPropsType = {
    onPageChanged: (currentPage: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,

}

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selected : ''}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>
                                {p}
                            </span>
                    )
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={s.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>{u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '884980f5-daa7-48cc-9fee-f7e12bbe8e95'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '884980f5-daa7-48cc-9fee-f7e12bbe8e95'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })

                                }}>Follow</button>
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

export default Users;