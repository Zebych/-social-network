import React, {ChangeEvent} from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../commen/Preloader/Preloader";
import {InitialStateType} from "../../../Redax/profile-reducer";
import userPhoto from "../../../assets/images/User-Profile.png"
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusHook} from "./ProfileStatusWithHooks";

type FileType = {
    lastModified: number
    lastModifiedDate: string
    name: string
    size: number
    type: string
    webkitRelativePath: string
}

type ProfileInfoPropsType = {
    profilePage: InitialStateType | null,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto?: any
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profilePage) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={c.profileInfo}>
            <div>
                {/*   <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgJ5gGZuqtluFKjVRaCEEmoWihm4LmHuwrw&usqp=CAU'}/>*/}
            </div>
            <div>
                <img src={props.profilePage.profile.photos.large || userPhoto} className={c.mainPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {/*<ProfileStatus status={props.profilePage.status}updateStatus={props.updateStatus}/>*/}
                <ProfileStatusHook status={props.profilePage.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}