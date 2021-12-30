import React from 'react';
import s from './FormControls.module.css'
import {Field} from "redux-form";

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea{...input}{...restProps}/></FormControl>
};

export const Input: React.FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input{...input}{...restProps}/></FormControl>

};

const FormControl: React.FC<any> = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>

        </div>
    );
}

export const createField = (name: string,
                            validate: ((value: Array<string>) => "Field is required" | undefined)[],
                            placeholder: string, props?: any, text?: string) => {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validate} component={Input} {...props}
        />{text}
    </div>
}
