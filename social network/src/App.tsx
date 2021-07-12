import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import {StoreType} from "./Redax/store";
import DialogsContainer from "./component/Dialogs/DialogsContainer";


type PropsType = {
    // store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>

            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer
                /*<Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}*/
                />}/>
                <Route path={'/profile'} render={() => <Profile
                /*<Route path={'/profile'} render={() => <Profile store={props.store}*/

                />}/>
            </div>
        </div>

    );
}

export default App;
