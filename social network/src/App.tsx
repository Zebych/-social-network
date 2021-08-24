import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContanier";
import HeaderContainer from "./component/Header/HeaderContanier";
import Login from "./component/Login/Login";

const App = () => {
    return (

        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </div>

    );
}

export default App;
