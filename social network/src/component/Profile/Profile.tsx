import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>);
}

export default Profile;
