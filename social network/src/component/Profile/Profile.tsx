import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {InitialStateType} from "../../Redax/profile-reducer";

type ProfileProps = {
    profilePage: InitialStateType | null,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    isOwner:boolean,
    savePhoto?:any
}
const Profile: React.FC<ProfileProps> = ({profilePage, getStatus, updateStatus,isOwner,savePhoto}) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profilePage={profilePage} getStatus={getStatus} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>);
}

export default Profile;
