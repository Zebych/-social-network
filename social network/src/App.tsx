import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {StoreType} from "./Redax/state";


type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state=props.store.getState()
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs DialogData={state.dialogsPage.DialogData}
                                                                MessageData={state.dialogsPage.MessageData}/>}/>
                <Route path={'/profile'} render={() => <Profile onClickAddPost={props.store.onClickAddPost.bind(props.store)}
                                                                PostsData={state.profilePage}
                                                                updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                />}/>
            </div>
        </div>

    );
}

export default App;
