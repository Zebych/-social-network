import React, {ChangeEvent, useState} from "react";
import c from './ProfileInfo.module.css'


type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusHook: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)


    const activateEditMode = () => {
        setEditMode(!editMode)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (<div>
            <div>
                {!editMode &&
                <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>}
            </div>
            <div>
                {editMode &&
                <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                       value={status}/>}
            </div>
        </div>
    )
}