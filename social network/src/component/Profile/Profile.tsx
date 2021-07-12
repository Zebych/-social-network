import React from 'react';
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { StoreType} from "../../Redax/store";
import MyPostsContainer from "./Myposts/MyPostsContainer";


type PropsType={
    store:StoreType
}


const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />

        </div>);
}

export default Profile;
