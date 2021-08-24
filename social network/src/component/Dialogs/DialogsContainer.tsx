import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redax/dialogsPage-reducer";
import { Types} from "../../Redax/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {InitialAuthStateType} from "../../Redax/auth-reducer";

type DialogDataType = {
    id: number,
    name: string,
}
export type MessageType = {
    id: number,
    message: string,
}
export type dialogsPageType = {
    MessageData: MessageType[],
    DialogData: DialogDataType[],
    newMessage: string,
}
type MapStateToPropsType={
    dialogsPage:dialogsPageType,
    InitialAuthState:InitialAuthStateType,
}
const mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return{
        dialogsPage: state.dialogsPage,
        InitialAuthState:state.auth,
    }
}
const mapDispatchToProps=(dispatch:(action: Types) => void)=>{
    return{
        updateNewMessageBody:(body:string)=>{
            dispatch(UpdateNewMessageTextAC(body))
        },
        sendMessage:()=>{
            dispatch(AddMessageAC())
        }
    }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;

