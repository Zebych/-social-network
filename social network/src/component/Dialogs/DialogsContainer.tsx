import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redax/dialogsPage-reducer";
import { RootStateType, Types} from "../../Redax/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps=(state:RootStateType)=>{
    return{
        dialogsPage: state.dialogsPage
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

