import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import GitComponent from "../gitComponent";



type PostsDataType={
    id:number
    message:string
    likesCount:number
}
type PropsType={
    PostsData:PostsDataType[]
    onClickAddPost:(postMessage:string)=>void
}


const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData}onClickAddPost={props.onClickAddPost}/>
            <GitComponent/>
        </div>);
}

export default Profile;
