import {PostsDataType, profilePageType, Types} from "./state";
import React from "react";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const profileReducer: React.Reducer<profilePageType, Types> = (state, action): profilePageType => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.messageNewPostText=action.newText
    } else if (action.type === ADD_POST) {
        const newPost: PostsDataType = {
            id: 5,
            message: action.postMessage,
            likesCount: 0
        }
        state.PostsData.push(newPost)

    }

    return state
}

export default profileReducer;
