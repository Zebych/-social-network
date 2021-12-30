import { connect } from "react-redux";
import { addPost, PostDataType } from "../../../redux/profileReducer";
import { AppStoreType } from "../../../redux/reduxStore";
import MyPosts from "./MyPosts";


type mapStateType = {
    profilePage: MyPostsType
}

type MyPostsType = {
    postData: Array<PostDataType>
}


type mapDispatchType = {
    addPost: (text: string) => void
}
export type MyPostsPropsType = mapStateType & mapDispatchType

const mapStateToProps = (state: AppStoreType): mapStateType => {
    return {
        profilePage: state.profilePage
    }
}


export const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)


