import React from 'react';
import c from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogDataType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type PropsDialogType = {
    DialogData: DialogDataType[]
    MessageData: MessageType[]
}


const Dialogs: React.FC<PropsDialogType> = (props) => {
    const DialogsElement = props.DialogData.map(d => <DialogItem id={d.id} name={d.name}/>)

    const MessageElement = props.MessageData.map(m => <Message message={m.message}/>)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {DialogsElement}
            </div>
            <div className={c.messages}>
                {MessageElement}
            </div>
        </div>
    )
}


export default Dialogs;
