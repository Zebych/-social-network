import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import DialogsContainer from "./component/Dialogs/DialogsContainer";

const App = () => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
            </div>
        </div>

    );
}

export default App;
