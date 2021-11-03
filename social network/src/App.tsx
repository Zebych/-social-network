import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";
import {connect, Provider} from 'react-redux';
import {compose} from "redux";
import {initializeApp} from "./Redax/app-reducer";
import store, {AppStateType} from "./Redax/redux-store";
import Preloader from "./component/commen/Preloader/Preloader";
import {WithSuspense} from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import("./component/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./component/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./component/Users/UsersContainer"))

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
                    <Route path={'/dialogs'} render={WithSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'} render={WithSuspense(ProfileContainer)}/>
                    <Route path={'/login'} render={WithSuspense(Login)}/>

                    <Route path={'/users'} render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                            <UsersContainer/>
                        </React.Suspense>
                    }}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialize: state.app.initialized
})

let AppContainer = compose(
    /*withRouter,*/
    connect(mapStateToProps, {initializeApp})(App));

const TestApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default TestApp;