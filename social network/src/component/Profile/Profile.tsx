import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Types} from "../../Redax/state";



type profilePageType = {
    PostsData: PostsDataType[]
    messageNewPostText:string
}
type PostsDataType={
    id:number
    message:string
    likesCount:number
}
type PropsType={
    PostsData:profilePageType
    dispatch:(action:Types)=>void
}


const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData.PostsData}
                     newPostText={props.PostsData.messageNewPostText}
                     dispatch={props.dispatch}
            />

        </div>);
}

export default Profile;
