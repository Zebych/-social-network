import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";




type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

type DialogDataType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type profilePageType = {
    PostsData: PostsDataType[]
    messageNewPostText: string
}
type dialogsPageType = {
    MessageData: MessageType[]
    DialogData: DialogDataType[]
}
type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
type propsState = {
    state: RootStateType
    onClickAddPost: (postMessage: string) => void
    updateNewPostText:(newText:string)=>void
}
const App: React.FC<propsState> = (props: propsState) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs DialogData={props.state.dialogsPage.DialogData}
                                                                MessageData={props.state.dialogsPage.MessageData}/>}/>
                <Route path={'/profile'} render={() => <Profile onClickAddPost={props.onClickAddPost}
                                                                PostsData={props.state.profilePage}
                                                                updateNewPostText={props.updateNewPostText}
                />}/>
            </div>
        </div>

    );
}

export default App;
