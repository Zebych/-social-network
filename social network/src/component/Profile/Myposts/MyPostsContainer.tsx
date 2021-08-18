import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redax/profile-reducer";
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
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)


