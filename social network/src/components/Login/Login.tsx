import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {loginThunk, setInvalidCreds} from "../../redux/authReducer";
import {AppStoreType} from "../../redux/reduxStore";
import s from "./Login.module.css";

export const Login = () => {
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm/>
        </div>
    )
}


type FormType = {
    login: string
    password: string
    rememberMe: boolean,
    captcha: string
}

const LoginForm = () => {
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<FormType>({mode: 'onTouched'})
    const onSubmit: SubmitHandler<FormType> = (data) =>
        dispatch(loginThunk(data.login, data.password, data.rememberMe, data.captcha))
    const onChange = () => dispatch(setInvalidCreds(false))
    const isAuth = useSelector((state: AppStoreType) => state.auth.isAuth)
    const invalidCredentials = useSelector((state: AppStoreType) => state.auth.invalidCredentials)
    const captcha = useSelector((state: AppStoreType) => state.auth.captcha)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)} onChange={onChange}>

            <div>
                <input className={`${s.input} ${errors.login ? s.inputError : ""} `} {...register('login', {
                    required: {value: true, message: 'required field'},
                    maxLength: {value: 30, message: 'max length 30'}
                })}
                       type="text" placeholder={"your login"}/>
                <div className={s.errorMessage}>
                    {errors.login?.message}
                </div>
            </div>
            <div>
                <input className={`${s.input} ${errors.password ? s.inputError : ""} `} {...register('password', {
                    required: {value: true, message: 'required field'},
                    maxLength: {value: 100, message: 'max length 100'}
                })}
                       type="password" placeholder={'your password'}/>

                <div className={s.errorMessage}>
                    {errors.password?.message}
                </div>
                {invalidCredentials && (
                    <div className={s.errorMessage}>
                        Неправильный логин или пароль
                    </div>
                )}
            </div>
            <div>
                <button className={s.button}>Login</button>
                <input className={s.checkBox} {...register('rememberMe')} type="checkBox"/> remember me
            </div>
            {
                captcha && <div className={s.captcha}>
                    <span className={s.errorMessage}>Введите капчу</span>
                    <img src={captcha} alt="captcha"/>
                    <input type="text" {...register('captcha')}/>
                </div>
            }

        </form>
    )
}