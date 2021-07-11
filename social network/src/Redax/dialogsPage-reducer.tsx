import {dialogsPageType, MessageType, Types} from "./state";
import React from "react";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsPageReducer: React.Reducer<dialogsPageType, Types> = (state, action): dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessage
            state.newMessage = ''
            const newMassageBody: MessageType = {
                id: 6,
                message: body
            }
            state.MessageData.push(newMassageBody)
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newMassage
            return state
        default:
            return state
    }
}

export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE,

    } as const
}
export const UpdateNewMessageTextAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMassage: body
    } as const
}

export default dialogsPageReducer;
