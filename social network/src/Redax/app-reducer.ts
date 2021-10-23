import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,
}

const appReducer = (state:InitialStateType = initialState, action:AuthTypeAC)
    : InitialStateType => {
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
//Types

export type AuthTypeAC = ReturnType<typeof initializedSuccess>
export type InitialStateType = typeof initialState

export default appReducer;