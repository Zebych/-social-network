import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SuperButton from "../common/SuperButton/SuperButton";
import s from './AddPostForm.module.css'

type FormType = {
    message: string
}

type PropsType = {
    callBack: (text: string) => void
    classNameTextArea?: string
    classNameButton?: string
}



export const AddPostForm = ({callBack,classNameTextArea,classNameButton}:PropsType) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormType>({ mode: 'onChange', })
    const onSubmit: SubmitHandler<FormType> = (data) => {
        callBack(data.message)
        setValue("message", "")
    }



    return (
        <form className={s.container} onSubmit={handleSubmit(onSubmit)}>

            <textarea  className={classNameTextArea} {...register('message', {
                required: true, minLength: 1, maxLength: { value: 300, message: 'max length 300' }
            })}
                placeholder={"Напиши своё сообщение"} />
            <span>
                {errors.message?.message}
            </span>

            <div>
                <SuperButton className={classNameButton} >Send</SuperButton>
            </div>
        </form>

    )
}