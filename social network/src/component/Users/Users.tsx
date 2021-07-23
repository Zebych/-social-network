import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/User-Profile.png"


export const Users = (props: UsersPropsType) => {
    let getUsers=()=>{
        if(props.usersPage.users.length===0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                        <div>
                            <div><img src={u.photos.small !=null?u.photos.small:userPhoto} className={s.userPhoto}/></div>
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
};

export default Users;