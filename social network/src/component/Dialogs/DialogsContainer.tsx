import React from 'react';
import {AddMessageAC, UpdateNewMessageTextAC} from "../../Redax/dialogsPage-reducer";
import {StoreType} from "../../Redax/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type PropsDialogType = {
    /*    store: StoreType*/
}


const DialogsContainer: React.FC<PropsDialogType> = (props) => {
    /* let state = props.store.getState().dialogsPage
     const onAddMessage = () => {
         props.store.dispatch(AddMessageAC())
     }

     const onChangeNewMessage = (body: string) => {
         props.store.dispatch(UpdateNewMessageTextAC(body))
     }*/
    return <StoreContext.Consumer>
        {
        (store)=>{
        let state = store.getState().dialogsPage
        const onAddMessage = () => {
        store.dispatch(AddMessageAC())
    }

        const onChangeNewMessage = (body: string) => {
        store.dispatch(UpdateNewMessageTextAC(body))
    }
        return <Dialogs DialogsPage={state}
        onChangeNewMessage={onChangeNewMessage}
        onAddMessage={onAddMessage}/>
    }}
    </StoreContext.Consumer>
}


export default DialogsContainer;
/*
<Dialogs DialogsPage={state}
         onChangeNewMessage={onChangeNewMessage}
         onAddMessage={onAddMessage}/>*/
