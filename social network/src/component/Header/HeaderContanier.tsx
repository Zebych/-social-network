import React from 'react';
import Header from './Header';
import {connect} from "react-redux";
import {getAuthUserData, InitialAuthStateType, setAuthUserData} from "../../Redax/auth-reducer";
import {AppStateType} from "../../Redax/redux-store";


type MapStateToPropsType = {
   auth:InitialAuthStateType
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string,) => void,
    getAuthUserData:()=>void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
})

export default connect(mapStateToProps, {setAuthUserData,getAuthUserData})(HeaderContainer);
