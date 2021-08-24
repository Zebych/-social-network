import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {profilePageType, ProfileType} from "../../Redax/profile-reducer";

type ProfileProps={
    profilePage:profilePageType|null,
}
const Profile = (props:ProfileProps) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profilePage={props.profilePage}/>
            <MyPostsContainer/>
        </div>);
}

export default Profile;
