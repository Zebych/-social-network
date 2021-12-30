import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatusThunk: (status: string) => void
    isOwner: boolean
    updatePhotoThunk: (photo: string) => void
}

function Profile({profile, status, updateUserStatusThunk, isOwner,updatePhotoThunk}: ProfilePropsType) {

    return <div className={`container`}>
        <ProfileInfo updatePhoto={updatePhotoThunk}  isOwner={isOwner} profile={profile} status={status} updateStatus={updateUserStatusThunk}/>
        <MyPostsContainer/>

    </div>

}


export default Profile