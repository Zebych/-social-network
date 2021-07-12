import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../Redax/store";


type PropsDialogType = {
    DialogsPage: dialogsPageType
    onChangeNewMessage: (body: string) => void
    onAddMessage: () => void
}


const Dialogs: React.FC<PropsDialogType> = (props) => {
    let state = props.DialogsPage
    const DialogsElement = state.DialogData.map(d => <DialogItem id={d.id} name={d.name}/>)
    const MessageElement = state.MessageData.map(m => <Message message={m.message}/>)
    let newMassageBody = state.newMessage


    const addMessage = () => {
        props.onAddMessage()
    }

    const ChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.onChangeNewMessage(body)
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
                <textarea
                    value={newMassageBody}
                    onChange={ChangeMessage}
                    placeholder={'Enter your message'}>
                </textarea>
            </div>
            <div>
                <button onClick={addMessage}>send message</button>
            </div>

        </div>
    )
}


export default Dialogs;
