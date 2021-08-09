import React from "react";


const SET_USER_DATA = 'SET_USER_DATA'

export type UsersTypeAC = ReturnType<typeof setAuthUserData>


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

const AuthReducer: React.Reducer<InitialAuthStateType, UsersTypeAC> = (state = initialState, action)
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


export default AuthReducer;