import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";
import userPhoto from "../../assets/images/User-Profile.png"

class Users extends React.Component<any, any>{
     getUsers=()=>{
         debugger
        if(this.props.usersPage.users.length===0){

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                this.props.setUsers(response.data.items)
            })
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.getUsers}>get users</button>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                            <div>
                                <div><img src={u.photos.small !=null?u.photos.small:userPhoto} className={s.userPhoto}/></div>
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