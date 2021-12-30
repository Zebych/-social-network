import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {addNewMessage, DialogsPageType} from "../../redux/dialogsReducer";
import {AppStoreType} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";


type mapDialogsStateType = {
    dialogsPage: DialogsPageType

}

type mapDialogsDispatchType = {
    sendNewDialogMessage: (text: string) => void
}

export type DialogsPropsType = mapDialogsStateType & mapDialogsDispatchType

const mapStateToProps = (state: AppStoreType): mapDialogsStateType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDialogsDispatchType => {
    return {
        sendNewDialogMessage: (text: string) => {
            dispatch(addNewMessage(text))
        }
    }
}


export default compose<React.ComponentType>(AuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

