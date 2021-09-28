import React from "react";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA'

export type AuthTypeAC = ReturnType<typeof setAuthUserData>


export type InitialAuthStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state:InitialAuthStateType = initialState, action:AuthTypeAC)
    : InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state

    }
}

//action
export const setAuthUserData =
    (id: null | number, email: null | string, login: null | string, isAuth: boolean) =>
        ({type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const)

//thunks
export const getAuthUserData = () => (dispatch: Dispatch<AuthTypeAC>) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const LoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    dispatch(stopSubmit('login', {_error: 'Common error'}))
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const Logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default AuthReducer;