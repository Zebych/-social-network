import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Preloader} from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';
import Music from "./components/Music/Music";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {initializeApp} from './redux/appReducer';
import {AppStoreType} from './redux/reduxStore';
import {ReactSuspense} from "./hoc/ReactSuspense";
import {Error} from "./components/ErrorPage/ErrorPage";

const Dialogs = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersApiComponent = React.lazy(() => import('./components/Users/UsersContainer'));


type MapStateToPropsType = {
    initialize: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}


class App extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

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
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Switch>

                        <Route path={"/profile/:userId?"}
                               render={ReactSuspense(ProfileContainer)}/>
                        <Route exact path={"/"}
                               render={() => <Redirect from={'/'} to={'/profile'}/>}/>
                        <Route path={"/dialogs"}
                               render={ReactSuspense(Dialogs)}/>

                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>

                        <Route path={"/users"}
                               render={ReactSuspense(UsersApiComponent)}/>

                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={'/404'} render={() => <Error/>}/>
                        <Redirect from={'*'} to={'/404'}/>


                    </Switch>
                </div>


            </div>

        );
    }

}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        initialize: state.app.initialized
    }
}
export default connect(mapStateToProps, {initializeApp})(App)
