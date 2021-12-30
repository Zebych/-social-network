import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {DialogsPropsType} from "./DialogsContainer";
import Message from "./Messages/Message";
import {AddMessageFormRedux, AddMessagePropsType} from "../Forms/AddMessageForm";
import {AddPostForm} from "../Forms/AddPostOrMessageForm";


function Dialogs(props: DialogsPropsType) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messagesData.map((message) => <Message key={message.id} message={message.message}/>)

    const addNewMessage = (value: AddMessagePropsType) => {
        props.sendNewDialogMessage(value.newMessageBody)
    }

    return (<div className={`${s.dialogs} container`}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>

            </div>
            <div className={s.addPost}>
                <AddPostForm classNameTextArea={s.textArea} callBack={props.sendNewDialogMessage}/>
                {/*<AddMessageFormRedux onSubmit={addNewMessage}/>*/}{/*вариант на классах*/}
            </div>


        </div>
    )
}

export default Dialogs