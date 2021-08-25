import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../commen/preloader/Preloader";
import {profilePageType} from "../../../Redax/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoPropsType = {
    profilePage: profilePageType|null,
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profilePage) {
        return <Preloader/>
    }
    return (
        <div className={c.profileInfo}>
            <div>
                {/*   <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgJ5gGZuqtluFKjVRaCEEmoWihm4LmHuwrw&usqp=CAU'}/>*/}
            </div>
            <div>
                <img src={props.profilePage.profile.photos.large}/>
                <ProfileStatus status={'hello'}/>
            </div>
        </div>
    );
}