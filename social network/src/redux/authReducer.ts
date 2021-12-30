import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {authAPI, securityAPI} from '../api/api';
import {AppStoreType} from './reduxStore';


export type initialStateType = {

    data: {
        id: number | null,
        email: string | null,
        login: string | null
    },
    isAuth: boolean,
    invalidCredentials: boolean,
    captcha: string | null
}


let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    invalidCredentials: false,
    captcha: null
} as initialStateType


export const authReducer = (state: initialStateType = initialState, action: ActionsAuthReducerType): initialStateType => {
    switch (action.type) {
        case "AUTH/SET-AUTH-USER-DATA":
            return {
                ...state,
                data: {...action.data},
                isAuth: action.isAuth
            }
        case "AUTH/SET-INVALID-CREDS":
            return {
                ...state,
                invalidCredentials: action.arg
            }
        case "AUTH/GET-CAPTCHA-SUCCESS":
            return {...state, captcha: action.captcha}
        default:
            return state
    }

}
/////////////////////////////////// AC


export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: "AUTH/SET-AUTH-USER-DATA", data: {id, email, login}, isAuth}) as const

export const setInvalidCreds = (arg: boolean) =>
    ({type: "AUTH/SET-INVALID-CREDS", arg}) as const

export const getCaptchaSuccess = (captcha: string) =>
    ({type: "AUTH/GET-CAPTCHA-SUCCESS", captcha}) as const


/////////////////////////////////// THUNKS 


export const authThunk = () => async (dispatch: Dispatch<ActionsAuthReducerType>) => {

    let data = await authAPI.authMe()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkType =>
    async (dispatch) => {

        let res = await authAPI.loginMe(email, password, rememberMe, captcha)

        if (res.data.resultCode === 0) {
            dispatch(authThunk())

        } else {
            if (res.data.resultCode === 10) {
                dispatch(getCaptchaThunk())
            }
            dispatch(setInvalidCreds(true))
        }
    }


export const logoutThunk = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}
export const getCaptchaThunk = () => async (dispatch: Dispatch) => {
    let res = await securityAPI.getCaptcha()
    dispatch(getCaptchaSuccess(res.url))
}
////////////////////////////// TYPE

export type ActionsAuthReducerType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setInvalidCreds>
    | ReturnType<typeof getCaptchaSuccess>

type ThunkType = ThunkAction<void, AppStoreType, unknown, ActionsAuthReducerType>
