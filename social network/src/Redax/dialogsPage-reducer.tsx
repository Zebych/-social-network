import {dialogsPageType, MessageType, Types} from "./store";
import React from "react";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    DialogData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Luda'},

        {id: 3, name: 'Masha'}
    ],
    MessageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 2, message: 'YO YOYo'}
    ],
    newMessage: ""
}

const dialogsPageReducer: React.Reducer<dialogsPageType, Types> = (state = initialState, action): dialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessage
            return {
                ...state,
                newMessage: '',
                MessageData: [...state.MessageData, {
                    id: 6,
                    message: body
                }]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMassage
            }
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
