import dialogsPageReducer, {AddMessageAC} from "./dialogsPage-reducer";
import {dialogsPageType} from "../component/Dialogs/DialogsContainer";

const startState:dialogsPageType = {
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

test('Correct message should be added',()=>{
const newMessageBody='newMessageBody'
    const endState=dialogsPageReducer(startState,AddMessageAC(newMessageBody))

    expect(endState.MessageData.length).toBe(4)
})
/*
test('Correct message should be updated',()=>{
    let body='Update new message'
    const endState=dialogsPageReducer(startState,UpdateNewMessageTextAC(body))

    expect(endState.newMessage).toBe(body)
})*/
