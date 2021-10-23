import React from 'react';
import {UserType} from "../../Redax/users-reducer";
import Paginator from "../commen/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    onPageChanged: (currentPage: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
}

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <Paginator currentPage={props.currentPage} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}/>
            <div> {
                props.users.map(u => <User user={u}
                                           key={u.id}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingInProgress={props.followingInProgress}/>
                )
            }
            </div>
        </div>
    );
}

export default Users;