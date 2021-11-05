import React, {ChangeEvent, useState} from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../commen/Preloader/Preloader";
import {InitialStateType} from "../../../Redax/profile-reducer";
import userPhoto from "../../../assets/images/User-Profile.png"
import {ProfileStatusHook} from "./ProfileStatusWithHooks";
import {FormEditModeDataType, ProfileDataFormReduxForm} from "./ProfileDataForm";


type ProfileInfoPropsType = {
    profilePage: InitialStateType | null,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto?: any,
    saveProfile: (formData:FormEditModeDataType) => void,
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = (
    {
        profilePage,
        saveProfile,
        updateStatus,
        isOwner,
        savePhoto,
    }
) => {
    const [editMode, setEditMode] = useState(false)
    if (!profilePage) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const goToEditMode = () => {
        setEditMode(true)
    }
    const onSubmit = (formData: FormEditModeDataType) => {
        saveProfile(formData)
    }
    return (
        <div className={c.profileInfo}>
            <div>
                <img src={profilePage.profile.photos.large || userPhoto} className={c.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode ? <ProfileDataFormReduxForm  onSubmit={onSubmit}/>
                    : <ProfileData profilePage={profilePage} isOwner={isOwner} goToEditMode={goToEditMode}/>}

                <ProfileStatusHook status={profilePage.status} updateStatus={updateStatus}/>
            </div>
        </div>
    )

}
type ProfileDataPropsType = {
    profilePage: InitialStateType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profilePage, isOwner, goToEditMode}) => {
    const profile = profilePage.profile
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            {/* Object.entries(profile.contacts) метод пробегает по объекту и формирует массив строк ключь:значение*/}
            <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
            return <Contact contactTitle={key}/> /*contactValue={profile.contacts[key]}*/
        })}

             {Object.entries(profile.contacts).map(([key,value]) => {
            //передать в компоненту ключь contactTitle={key} и значение ключа contactValue={profile.contacts[key]}
            return <Contact  contactTitle={`${key} ${value}`} />
        })}
            {/* {Object.entries(profile.contacts).map(([key,value]) => {
            //передать в компоненту ключь contactTitle={key} и значение ключа contactValue={profile.contacts[key]}
            return <Contact  contactTitle={`${key} `} contactValue={`${value}`} />
        })}*/}
        </div>
    </div>
}

type ContactPropsType = {
    contactTitle: string
    // contactValue: string

}
const Contact: React.FC<ContactPropsType> = ({
                                                 contactTitle,
                                                 // contactValue
                                             }) => {

    return <div className={c.contact}><b>{contactTitle}</b>: {/*contactValue*/}</div>
}