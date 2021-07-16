import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                        <div>
                            <div><img src={u.photoUrl} className={s.userPhoto}/></div>
                            <div>{u.followed
                                ? <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Unfollow</button>
                            }
                            </div>
                        </div>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>
                )

            }
        </div>
    );
};

export default Users;