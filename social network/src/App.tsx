import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContanier";
import HeaderContainer from "./component/Header/HeaderContanier";
import Login from "./component/Login/Login";
import {connect} from 'react-redux';
import {compose} from "redux";
import {initializeApp} from "./Redax/app-reducer";
import {AppStateType} from "./Redax/redux-store";
import Preloader from "./component/commen/Preloader/Preloader";

type MapDispatchPropsType = {
    initializeApp: () => void
}
type MapStatePropsType = {
    initialize: boolean
}
type AppPropsType = MapDispatchPropsType & MapStatePropsType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }
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
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    initialize: state.app.initialized
})

export default compose(
    /*withRouter,*/
    connect(mapStateToProps, {initializeApp})(App));
