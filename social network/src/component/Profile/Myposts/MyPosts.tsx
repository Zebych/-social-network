import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../commen/FormControls/FormControls";


export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type PropsType = {
    PostsData: PostsDataType[]
    newPostText: string
    addPost: (postMessage: string) => void
}


const MyPosts: React.FC<PropsType> = (props) => {
    const PostsElement = props.PostsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    const onAddPost = (newText: AddPostPropsType) => {
        props.addPost(newText.updateNewPostText)
    }
    return (
        <div>
            <div className={c.profile}>

                <div>
                    <img src="https://meragor.com/files/styles//ava_800_800_wm/_big-and-goofy-smile_0.jpg" alt=""/>
                    ava
                </div>
                <div>
                    <AddPostFormRedux onSubmit={onAddPost}/>
                </div>
            </div>
            {PostsElement}
        </div>);
}

type AddPostPropsType = {
    updateNewPostText: string,
}
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddPostPropsType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'updateNewPostText'} placeholder={'Enter new post'}
                   validate={[required, maxLength10]}/>
            <button>Create Post</button>
        </div>
    </form>
}
const AddPostFormRedux = reduxForm<AddPostPropsType>({form: 'myPostAddMessageForm'})(AddNewPostForm)

export default MyPosts;
