import React, {ChangeEvent} from "react";
import {editModeProfileInfo, ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "./../../../images/user.png";
import s from "./ProfileInfo.module.css";
import {ProfileStatus} from "./ProfileStatus";
import {Contact} from "./Contact/Contact";
import {ProfileDataForm} from "./ProfileDataForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redux/reduxStore";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photo: string) => void

}
export type ProfileDataProps = {
    updateStatus: (status: string) => void
    status: string
    profile: ProfileType
    isOwner: boolean

}


function ProfileInfo({profile, status, updateStatus, isOwner, updatePhoto}: ProfileInfoType) {
    const dispatch = useDispatch()
    const editMode = useSelector((state: AppStoreType) => state.profilePage.profileInfoEditMode)
    const activateEditMode = () => dispatch(editModeProfileInfo(true))
    if (!Object.keys(profile).length) {
        return <div>
            <Preloader/>
        </div>
    }


    const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            updatePhoto(e.target.files[0].name)
        }
    }

    return <div className={s.container}>

        <div className={s.profileWrapper}>
            <div className={s.profileAvatarWrapper}>
                <img alt={'profileImage'} className={s.image} src={profile.photos.large || userPhoto}/>
                {
                    isOwner
                    && <div style={{padding: '10px', display: "flex", flexDirection: 'column', marginLeft: '20px'}}>
                        <input onChange={savePhotoHandler} id={'img'} style={{marginLeft: '50px', display: 'none'}}
                               type="file"/>
                        <label htmlFor='img'> updatePhoto</label>
                        <button className={s.editProfile} onClick={() => activateEditMode()}>changeProfile</button>
                    </div>
                }
            </div>

            <div className={s.text}>
                {editMode ?
                    <ProfileDataForm updateStatus={updateStatus} profile={profile} status={status} isOwner={isOwner}/>
                    :
                    <ProfileData updateStatus={updateStatus} status={status} profile={profile} isOwner={isOwner}/>
                }
            </div>

        </div>


    </div>

}

const ProfileData = ({updateStatus, status, profile, isOwner}: ProfileDataProps) => {
    let contacts = profile.contacts
    return <div className={s.profileInfoWrapper}>

        <div>
            <b>FullName</b>: {profile.fullName}
        </div>
        <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>

        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <>
            <b>Contacts</b>:{Object.entries(contacts).map(
            ([key, value], index) =>
                <Contact
                    key={index}
                    contact={key}
                    contactValue={value}/>)}
        </>

    </div>
}


export default ProfileInfo