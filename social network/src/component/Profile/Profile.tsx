import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {InitialStateType} from "../../Redax/profile-reducer";

type ProfileProps = {
    profilePage: InitialStateType | null,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
}
const Profile: React.FC<ProfileProps> = ({profilePage, getStatus, updateStatus}) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profilePage={profilePage} getStatus={getStatus} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>);
}

export default Profile;
