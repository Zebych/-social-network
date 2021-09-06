import React from 'react';
import s from './FormControls.module.css'

/*name: "updateNewPostText"
onBlur: ƒ (event)
onChange: ƒ (event)
onDragStart: ƒ (event)
onDrop: ƒ (event)
onFocus: ƒ (event)
value: ""
    [[Prototype]]: Object*/
/*meta:
    active: false
asyncValidating: false
autofilled: false
dirty: false
dispatch: ƒ (action)
error: undefined
form: "myPostAddMessageForm"
initial: undefined
invalid: false
pristine: true
submitFailed: false
submitting: false
touched: false
valid: true
visited: false
warning: undefined
    [[Prototype]]: Object
placeholder: "Enter new post"*/

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, ...restProps}=props
    return <FormControl {...props}><textarea{...input}{...restProps}/></FormControl>
};

export const Input: React.FC<any> = (props) => {
    const {input, meta, ...restProps}=props
    return <FormControl {...props}><input{...input}{...restProps}/></FormControl>

};

const FormControl: React.FC<any> = ({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    );
}

