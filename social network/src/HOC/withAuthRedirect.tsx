import React, {ComponentType} from 'react';
import {AppStateType} from "../Redax/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {InitialAuthStateType} from "../Redax/auth-reducer";

type MapStatePropsType={
    auth:InitialAuthStateType,
}
const mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        auth:state.auth
    }
}
export function WithAuthRedirect <T>(Component:ComponentType<T>) {

    const RedirectComponent=(props:MapStatePropsType)=>{
        let {auth,...resProps}=props
        if(!props.auth.isAuth)return <Redirect to={'/login'}/>
        return <Component{...resProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
};

export default WithAuthRedirect;