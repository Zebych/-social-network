import React from 'react';
import Header from './Header';
import axios from "axios";
import {connect} from "react-redux";
import AuthReducer, {InitialAuthStateType, setAuthUserData} from "../../Redax/auth-reducer";
import {AppStateType} from "../../Redax/redux-store";


type MapStateToPropsType = {
   auth:InitialAuthStateType
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string,) => void,
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
