import React from "react";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


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

const AuthReducer: React.Reducer<InitialAuthStateType, AuthTypeAC> = (state = initialState, action)
    : InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state

    }
}

export const setAuthUserData = (id: null | number, email: null | string, login: null | string,) => {
    return {
        type: SET_USER_DATA, data: {id, email, login,}
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthTypeAC>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default AuthReducer;