import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {PhotosType, ProfileType} from "../../Redax/profile-reducer";

type ProfileProps={
    profile:PhotosType
}
const Profile = (props:ProfileProps) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>);
}

export default Profile;
