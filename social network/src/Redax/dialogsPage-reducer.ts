import { Types} from "./store";
import React from "react";
import {dialogsPageType} from "../component/Dialogs/DialogsContainer";

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
        {id: 3, message: 'YO YOYo'}
    ],
    newMessage: ""
}

const dialogsPageReducer = (state:dialogsPageType = initialState, action:Types): dialogsPageType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                newMessage: '',
                MessageData: [...state.MessageData, {
                    id: 6,
                    message: body
                }]
            }
        default:
            return state
    }
}

export const AddMessageAC = (newMessageBody:string) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    } as const
}


export default dialogsPageReducer;
