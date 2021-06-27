import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {AddMessageAC,  StoreType,  UpdateNewMessageTextAC} from "../../Redax/state";


type PropsDialogType = {
    store: StoreType
}


const Dialogs: React.FC<PropsDialogType> = (props) => {
    let state = props.store.getState().dialogsPage

    const DialogsElement = state.DialogData.map(d => <DialogItem id={d.id} name={d.name}/>)
    const MessageElement = state.MessageData.map(m => <Message message={m.message}/>)
    let newMassageBody = state.newMessage


    const addMessage = () => {
            props.store.dispatch(AddMessageAC())
        }

    const onChangeNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.store.dispatch(UpdateNewMessageTextAC(body))
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
                <textarea value={newMassageBody} onChange={onChangeNewMessage}
                          placeholder={'Enter your message'}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>send message</button>
            </div>

        </div>
    )
}


export default Dialogs;
