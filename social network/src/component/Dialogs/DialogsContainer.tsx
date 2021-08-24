import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redax/dialogsPage-reducer";
import { Types} from "../../Redax/store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import WithAuthRedirect from "../../HOC/withAuthRedirect";

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
}
const mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return{
        dialogsPage: state.dialogsPage,
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

export default WithAuthRedirect(connect(mapStateToProps,mapDispatchToProps)(Dialogs));
;

