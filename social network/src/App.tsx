import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";

const App = () => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
