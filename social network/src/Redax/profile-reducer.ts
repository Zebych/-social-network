import {Types} from "./store";
import React from "react";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export type profilePageType = {
    PostsData: PostsDataType[]
    messageNewPostText: string
    profile: null
}

let initialState = {
    PostsData: [
        {id: 1, message: 'Hi,how a you?', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 3},
        {id: 3, message: 'YOyoYo', likesCount: 5}
    ],
    messageNewPostText: "Enter message post",
    profile: null,
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

export const AddPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUsersProfile = (profile: null) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    } as const
}

export default profileReducer;