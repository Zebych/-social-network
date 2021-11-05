import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {InitialAuthStateType, Logout, setAuthUserData} from "../../Redax/auth-reducer";
import {AppStateType} from "../../Redax/redux-store";
import {debuglog} from "util";


type MapStateToPropsType = {
    // auth: InitialAuthStateType
    login: string | null,
    isAuth:boolean,
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string, isAuth: boolean) => void,
    Logout:()=>void
    // getAuthUserData: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    render() {
        return (
            <Header {...this.props} logout={Logout}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth:state.auth.isAuth,
})

export default connect(mapStateToProps, {setAuthUserData, Logout})(HeaderContainer);
