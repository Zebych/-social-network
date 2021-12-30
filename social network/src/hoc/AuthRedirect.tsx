import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStoreType } from "../redux/reduxStore";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStoreType): mapStateToPropsType => {

    return {
        isAuth: state.auth.isAuth
    }
}

export function AuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsType) => {

        let { isAuth, ...restProps } = props

        if (!isAuth) return <Redirect to="/login" />

        return <Component  {...restProps as T} />
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
