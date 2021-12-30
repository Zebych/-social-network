import React, {useEffect, useState} from 'react'


type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatus = (props: PropsType) => {


    const [editMode, setEditMode] = useState<Boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) // сетаем значение в локал стейт

    const activateEditmode = () => {
        if (!props.isOwner) {
            return
        }
        setEditMode(true)
    }
    const deactivateEditMode = (status: string) => {
        props.updateStatus(status)
        setEditMode(false)
    }


    return (

        <>

            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditmode}>
                        <b>Status</b>: {props.status}
                    </span>
                </div>
            }

            {
                editMode &&
                <div>
                    <input  onBlur={() => deactivateEditMode(status)}
                           onChange={(e) => setStatus(e.currentTarget.value)} autoFocus value={status}/>
                </div>
            }


        </>
    )
}
