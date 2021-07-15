import {PostsDataType, profilePageType, Types} from "./store";
import React from "react";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    PostsData: [
        {id: 1, message: 'Hi,how a you?', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 3},
        {id: 3, message: 'YOyoYo', likesCount: 5}
    ],
    messageNewPostText: "Enter message post"
}

const profileReducer: React.Reducer<profilePageType, Types> = (state = initialState, action): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: 5,
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

export default profileReducer;