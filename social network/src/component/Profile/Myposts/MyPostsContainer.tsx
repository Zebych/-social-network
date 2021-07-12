import React from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";
import {StoreType} from "../../../Redax/store";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}


const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    let state = props.store.getState()

    let addPost = (postMessage: string) => {
        props.store.dispatch(AddPostAC(postMessage))
    }
    const onPostChange = (newText: string) => {
        props.store.dispatch(UpdateNewPostTextAC(newText))
    }

    return (<MyPosts
            PostsData={state.profilePage.PostsData}
            newPostText={state.profilePage.messageNewPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}/>
    )
}
export default MyPostsContainer;
