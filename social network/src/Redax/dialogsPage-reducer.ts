import { Types} from "./store";

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

const dialogsPageReducer = (state:InitialStateType = initialState, action:Types): InitialStateType => {

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
//Actions
export const AddMessageAC = (newMessageBody:string) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    } as const
}

//Types

type InitialStateType = typeof initialState

export default dialogsPageReducer;
