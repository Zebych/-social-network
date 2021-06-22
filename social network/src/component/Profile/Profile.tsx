import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



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
    onClickAddPost:(postMessage:string)=>void
    updateNewPostText:(newText:string)=>void
}


const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData.PostsData}
                     newPostText={props.PostsData.messageNewPostText}
                     onClickAddPost={props.onClickAddPost}
                     updateNewPostText={props.updateNewPostText}
            />

        </div>);
}

export default Profile;
