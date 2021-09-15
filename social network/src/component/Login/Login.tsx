import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../commen/FormControls/FormControls";
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
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} validate={[required]} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me
            </div>
            {props.error && <div className={s.err}>
                {props.error}
            </div>}
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
        console.log(formData)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const mapStateToProps=(state:AppStateType)=>{
    return{
        auth: state.auth
    }

}
export default connect(mapStateToProps, {LoginTC})(Login);