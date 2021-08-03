import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../commen/preloader/Preloader";


type ProfileInfoPropsType = {
    profile: any,
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={c.profileInfo}>
            <div>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgJ5gGZuqtluFKjVRaCEEmoWihm4LmHuwrw&usqp=CAU'}/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
        </div>
    )
}