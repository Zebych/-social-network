import {v1} from "uuid";


let initialState: initialStateType = {

    messagesData: [
        {id: v1(), message: "YO"},
        {id: v1(), message: "Privet"},
        {id: v1(), message: "Kak tvoi dela?"},
        {id: v1(), message: "dab dab dab "},
        {id: v1(), message: "hotline miami"},
    ],

    dialogsData: [

        {id: v1(), name: "Ilya"},
        {id: v1(), name: "Sasha"},
        {id: v1(), name: "Dasha"},
        {id: v1(), name: "Masha"},
        {id: v1(), name: "Lesha"},
    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsDialogsReducerType): initialStateType => {


    switch (action.type) {
        case "DIALOGS/ADD-NEW-MESSAGE":
            const newMessage: MessageDataType = {id: v1(), message: action.newMessage}
            return {...state, messagesData: [...state.messagesData, newMessage]}
        default:
            return state
    }

}


//////// AC
export const addNewMessage = (messageText: string) => ({
    type: "DIALOGS/ADD-NEW-MESSAGE",
    newMessage: messageText
}) as const


///////// TYPES
type ActionsDialogsReducerType =
    | ReturnType<typeof addNewMessage>


export type DialogsDataType = {
    name: string
    id: string
}
export type MessageDataType = {
    message: string
    id: string
}
export type DialogsPageType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
}

export type initialStateType = {
    messagesData: Array<MessageDataType>
    dialogsData: Array<DialogsDataType>
}


