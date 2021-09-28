import React from 'react';
import {addPostAC} from "../../../Redax/profile-reducer";
import MyPosts, {PostsDataType} from "./MyPosts";
import {connect} from "react-redux";
import {Types} from "../../../Redax/redux-store";
import { RootStateType} from "../../../Redax/store";


type MapStateToPropsType={
    PostsData:Array<PostsDataType>,
    newPostText:string,
}

const mapStateToProps = (state: RootStateType):MapStateToPropsType => {
    return {
        PostsData: state.profilePage.PostsData,
        newPostText: state.profilePage.messageNewPostText
    }
}
const mapDispatchToProps = (dispatch: (action: Types) => void) => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)


