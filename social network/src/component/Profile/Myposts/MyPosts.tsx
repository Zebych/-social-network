import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {AddPostAC, Types, UpdateNewPostTextAC} from "../../../Redax/state";


type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type PropsType = {
    PostsData: PostsDataType[]
    newPostText:string
    dispatch:(action:Types)=>void
}


const MyPosts: React.FC<PropsType> = (props) => {
    const PostsElement = props.PostsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if(newPostElement.current){
            let postMessage=newPostElement.current.value
            props.dispatch(AddPostAC(postMessage))
            newPostElement.current.value=''
        }
    }
    const updateNewPostText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newText=e.currentTarget.value
        props.dispatch(UpdateNewPostTextAC(newText))
    }
    return (
        <div>
            <div className={c.profile}>
                <button onClick={addPost}>Create Post</button>
                <div>
                    <img src="https://meragor.com/files/styles//ava_800_800_wm/_big-and-goofy-smile_0.jpg" alt=""/>
                    ava
                </div>
                <div>
                    <textarea ref={newPostElement} onChange={updateNewPostText} value={props.newPostText} />
                </div>
            </div>
            {PostsElement}
        </div>);
}

export default MyPosts;
