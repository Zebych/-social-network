import React from "react";
import {AddPostForm} from "../../Forms/AddPostOrMessageForm";
import s from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import Post from "./Post/Post";


function MyPosts(props: MyPostsPropsType) {

    let state = props.profilePage

    let postsElements = state.postData.map(post => <Post key={post.id} message={post.post}
                                                         likeCounts={post.likeCounts} avatar={post.avatar}/>)


    return (
        <div className={s.container}>

            <div className={s.postsWrapper}>
                <h3> My Posts </h3>
                <AddPostForm classNameTextArea={s.textarea} callBack={props.addPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts