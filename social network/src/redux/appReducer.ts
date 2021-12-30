import {ThunkAction} from 'redux-thunk';
import {authThunk} from './authReducer';
import {AppStoreType} from './reduxStore';


type AppReducerActionsType = ReturnType<typeof initializedSuccess>

/*type InitialStateType = {
    initialized: boolean,
}*/

let initialState = {
    initialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED':
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
//////// AC
export const initializedSuccess = () => ({type: 'APP/INITIALIZED'}) as const

//////// THUNK

type ThunkType = ThunkAction<void, AppStoreType, unknown, AppReducerActionsType>
export type InitialStateType = typeof initialState

export const initializeApp = (): ThunkType => async (dispatch) => {
    await dispatch(authThunk())
    dispatch(initializedSuccess())
}