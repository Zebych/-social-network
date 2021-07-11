import {dialogsPageType, MessageType, Types} from "./state";
import React from "react";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsPageReducer: React.Reducer<dialogsPageType, Types> = (state, action): dialogsPageType => {

    if (action.type === ADD_MESSAGE) {
        let body = state.newMessage
        state.newMessage = ''
        const newMassageBody: MessageType = {
            id: 6,
            message: body
        }
        state.MessageData.push(newMassageBody)

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
       state.newMessage = action.newMassage

    }
    return state
}

export default dialogsPageReducer
