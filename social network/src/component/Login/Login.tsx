import React, {useEffect} from 'react';
import s from './Login.module.css'
import {InjectedFormProps, reduxForm} from 'redux-form';
import {createField} from "../commen/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from 'react-redux';
import {LoginTC} from "../../Redax/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redax/redux-store";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField("email", [required],  "Email",)}
            {createField("password", [required], "Password", {type: "text"})}
            {createField("rememberMe", [],  "rememberMe", {type: "checkbox"},
                "remember me")}

            {error && <div className={s.err}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.LoginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    );
};


const mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth
    }

}
export default connect(mapStateToProps, {LoginTC})(Login);