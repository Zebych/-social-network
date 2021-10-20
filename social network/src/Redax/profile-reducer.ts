import {Types} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    PostsData: [
        {id: 1, message: 'Hi,how a you?', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 3},
        {id: 3, message: 'YOyoYo', likesCount: 5}
    ],
    profile: {
        aboutMe: '',
        contacts:
            {
                facebook: '',
                github: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: '',
            },
        fullName: "Any",
        lookingForAJob: false,
        lookingForAJobDescription: '',
        photos:
            {
                large: '',
                small: '',
            },
        userId: 18916,
    },
    status: '',
}

const profileReducer = (state:InitialStateType = initialState, action:Types): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataStateType = {
                id: 4,
                message: action.postMessage,
                likesCount: 0
            }
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}
//Action
export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}
export const setUsersProfile = (profile: ProfileStateType) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    } as const
}

//Thunk
export const getUsersProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode===0){
                dispatch(setStatus(status))
            }

        })
}

//Types
export type InitialStateType = typeof initialState
export type ProfileStateType = typeof initialState.profile
type PostsDataStateType =  typeof initialState.PostsData[0]
export default profileReducer;