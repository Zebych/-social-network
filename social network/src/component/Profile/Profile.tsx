import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {InitialStateType} from "../../Redax/profile-reducer";

type ProfileProps={
    profilePage:InitialStateType|null,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
}
const Profile = (props:ProfileProps) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profilePage={props.profilePage} getStatus={props.getStatus} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>);
}

export default Profile;
