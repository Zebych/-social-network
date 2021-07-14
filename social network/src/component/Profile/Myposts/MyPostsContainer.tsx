import React from 'react';
import {AddPostAC, UpdateNewPostTextAC} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import { RootStateType, Types} from "../../../Redax/store";


const mapStateToProps = (state: RootStateType) => {
    return {
        PostsData: state.profilePage.PostsData,
        newPostText: state.profilePage.messageNewPostText
    }
}
const mapDispatchToProps = (dispatch: (action: Types) => void) => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(UpdateNewPostTextAC(newText))
        },
        addPost: (postMessage: string) => {
            dispatch(AddPostAC(postMessage))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;

