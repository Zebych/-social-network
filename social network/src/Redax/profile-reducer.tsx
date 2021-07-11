import {PostsDataType, profilePageType, Types} from "./state";
import React from "react";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const profileReducer: React.Reducer<profilePageType, Types> = (state, action): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            state.PostsData.push(newPost)
            state.messageNewPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.messageNewPostText = action.newText
            return state
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