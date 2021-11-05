import React from "react";
import {createField, Input, Textarea} from "../../commen/FormControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";

export type FormEditModeDataType = {
    FullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

 const ProfileDataForm: React.FC<InjectedFormProps<FormEditModeDataType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <button onClick={() => {
        }}>save
        </button>
        <div>
            <b>Full name</b>: {createField("Full name", [required], "FullName",)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField("lookingForAJob", [], "", {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>:
            {createField("My professional skills", [],
                "lookingForAJobDescription", Textarea)}
        </div>
        <div>
            <b>About me</b>:{createField("About me", [],
            "aboutMe", Textarea)}
        </div>

    </form>
}
export const ProfileDataFormReduxForm = reduxForm<FormEditModeDataType>({form: 'edit-profile'})(ProfileDataForm)