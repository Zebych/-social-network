import React from 'react';
import {AddMessageAC} from "../../Redax/dialogsPage-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType, Types} from "../../Redax/redux-store";
import WithAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from 'redux';

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
        sendMessage:(newMessageBody:string)=>{
            dispatch(AddMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(/*WithAuthRedirect,*/connect(mapStateToProps,mapDispatchToProps))(Dialogs);


