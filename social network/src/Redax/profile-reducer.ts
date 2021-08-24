import React from "react";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {AddMessageAC, UpdateNewMessageTextAC} from "./dialogsPage-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

export type ProfileTypeAC = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof AddMessageAC> | ReturnType<typeof UpdateNewMessageTextAC> | ReturnType<typeof setUsersProfile>

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number,
}
type ContactsType = {
<<<<<<< HEAD
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
    large: string ,
    small: string ,
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    photos: PhotosType,
    userId: number,
=======
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}
type PhotosType = {
    large: string
    small: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
>>>>>>> a330a240b702ac18abfbf44352d84de8a66679f3
}

export type profilePageType = {
    PostsData: PostsDataType[],
    messageNewPostText: string,
    profile: ProfileType,
}

let initialState = {
    PostsData: [
        {id: 1, message: 'Hi,how a you?', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 3},
        {id: 3, message: 'YOyoYo', likesCount: 5}
    ],
    messageNewPostText: "Enter message post",
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
}

const profileReducer: React.Reducer<profilePageType, ProfileTypeAC> = (state = initialState, action): profilePageType => {

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
                messageNewPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                messageNewPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
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
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    } as const
}


export const getProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileTypeAC>) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUsersProfile(response.data))
        })
    }
}

export default profileReducer;