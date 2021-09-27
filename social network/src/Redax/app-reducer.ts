import React from "react";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type AuthTypeAC = ReturnType<typeof initializedSuccess>
export type InitialAuthStateType = {
    initialized: boolean

}

let initialState: InitialAuthStateType = {
    initialized: false,
}

const AppReducer: React.Reducer<InitialAuthStateType, AuthTypeAC> = (state = initialState, action)
    : InitialAuthStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state

    }
}

//action
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

//thunks
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}

export default AppReducer;