import React from 'react';
import s from './Users.module.css'
import userPhoto from "../../assets/images/User-Profile.png"
import {UserType} from "../../Redax/users-reducer";

type UsersPropsType={
    onPageChanged:(currentPage: number)=>void,
    totalUsersCount:number,
    pageSize:number,
    currentPage:number,
    users:Array<UserType>,
    follow:(userId: number)=>void,
    unfollow:(userId: number)=>void,

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
                            <div><img src={u.photos.small != null ? u.photos.small : userPhoto}
                                      className={s.userPhoto}/></div>
                            <div>{u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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

export default Users;