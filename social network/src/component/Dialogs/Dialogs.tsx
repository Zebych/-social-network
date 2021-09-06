import React from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "./DialogsContainer";
import {InitialAuthStateType} from "../../Redax/auth-reducer";
import {AddMessageFormRedux, AddMessagePropsType} from "./AddMessageForm/AddMessageForm";


type PropsDialogType = {
    dialogsPage: dialogsPageType,
    InitialAuthState: InitialAuthStateType,
    updateNewMessageBody: (body: string) => void,
    sendMessage: (newMessageBody: string) => void,
}

const Dialogs: React.FC<PropsDialogType> = (props) => {
    let state = props.dialogsPage
    const DialogsElement = state.DialogData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const MessageElement = state.MessageData.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (value: AddMessagePropsType) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {DialogsElement}
            </div>
            <div className={c.messages}>
                {MessageElement}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>


        </div>
    )
}


export default Dialogs;
