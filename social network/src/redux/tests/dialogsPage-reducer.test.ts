import {dialogsReducer, addNewMessage, initialStateType} from "../dialogsReducer";

const startState: initialStateType = {
    messagesData: [
        {message: 'Hi', id: '1'},
        {id: '2', message: 'Yo'},
        {id: '3', message: 'YO YOYo'}
    ],
    dialogsData: [
        {id: '1', name: 'Sasha'},
        {id: '2', name: 'Luda'},
        {id: '3', name: 'Masha'}
    ],
}

test('Correct message should be added', () => {
    const newMessageBody = 'newMessageBody'
    const endState = dialogsReducer(startState, addNewMessage(newMessageBody))

    expect(endState.messagesData.length).toBe(4)
})
