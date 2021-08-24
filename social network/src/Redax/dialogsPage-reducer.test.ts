import dialogsPageReducer, {AddMessageAC, UpdateNewMessageTextAC} from "./dialogsPage-reducer";
import {dialogsPageType} from "../component/Dialogs/DialogsContainer";

test('Correct message should be added',()=>{
    let startState:dialogsPageType = {
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

    const endState=dialogsPageReducer(startState,AddMessageAC())

    expect(endState.MessageData.length).toBe(4)
})
test('Correct message should be updated',()=>{
    let startState:dialogsPageType = {
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

    let body='Update new message'
    const endState=dialogsPageReducer(startState,UpdateNewMessageTextAC(body))

    expect(endState.newMessage).toBe(body)
})