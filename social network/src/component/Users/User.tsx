import React from 'react';
import s from './User.module.css'
import userPhoto from "../../assets/images/User-Profile.png"
import {UserType} from "../../Redax/users-reducer";
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    user:UserType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
}

const User = (props: UsersPropsType) => {
    const user = props.user
    return (<div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>{user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  props.unfollow(user.id)
                              }}>
                        Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                              onClick={() => props.follow(user.id)}>
                        Follow</button>
                }
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>
        </div>
    )
}

export default User