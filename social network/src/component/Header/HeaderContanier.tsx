import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {InitialAuthStateType, Logout, setAuthUserData} from "../../Redax/auth-reducer";
import {AppStateType} from "../../Redax/redux-store";


type MapStateToPropsType = {
    auth: InitialAuthStateType
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string, isAuth: boolean) => void,
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
    auth: state.auth
})

export default connect(mapStateToProps, {setAuthUserData, Logout})(HeaderContainer);
