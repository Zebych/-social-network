import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type AuthTypeAC = ReturnType<typeof initializedSuccess>
type InitialStateType = typeof initialState

let initialState = {
    initialized: false,
}


const AppReducer = (state:InitialStateType = initialState, action:AuthTypeAC)
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

export default AppReducer;