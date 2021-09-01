import React from "react";
import {Types} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number,
}
type ContactsType = {
    facebook: string,
    github: string,
    instagram: string,
    mainLink: string,
    twitter: string,
    vk: string,
    website: string,
    youtube: string,
}
export type PhotosType = {
    large: string,
    small: string,
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    photos: PhotosType,
    userId: number,
}

export type profilePageType = {
    PostsData: PostsDataType[],
    profile: ProfileType,
    status:string,
}

let initialState:profilePageType = {
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

const profileReducer: React.Reducer<profilePageType, Types> = (state = initialState, action): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
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
export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    } as const
}
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


export default profileReducer;