import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";



type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type PropsType = {
    PostsData: PostsDataType[]
    onClickAddPost: (postMessage: string) => void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}


const MyPosts: React.FC<PropsType> = (props) => {
    const PostsElement = props.PostsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if(newPostElement.current){
            props.onClickAddPost(newPostElement.current.value)
            newPostElement.current.value=''
        }
    }
    const updateNewPostText=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
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
