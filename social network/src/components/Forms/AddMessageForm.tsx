import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "./FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type AddMessagePropsType = {
    newMessageBody: string,
}
const maxLength50 = maxLengthCreator(50)

 const AddMessageForm: React.FC<InjectedFormProps<AddMessagePropsType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'}
                   placeholder={'Enter your message'}/>
        </div>
        <div>
            <button>send message</button>
        </div>
    </form>
}
export const AddMessageFormRedux = reduxForm<AddMessagePropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)