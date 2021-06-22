import {renderTree} from "../render";

type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

type DialogDataType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type profilePageType = {
    PostsData: PostsDataType[]
    messageNewPostText:string
}
type dialogsPageType = {
    MessageData: MessageType[]
    DialogData: DialogDataType[]
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
let state: RootStateType = {
    profilePage: {
        PostsData: [
            {id: 1, message: 'Hi,how a you?', likesCount: 2},
            {id: 2, message: 'Yo', likesCount: 3},
            {id: 3, message: 'YOyoYo', likesCount: 5}
        ],
        messageNewPostText:""
    },
    dialogsPage: {
        DialogData: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Luda'},

            {id: 3, name: 'Masha'}
        ],
        MessageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 2, message: 'YO YOYo'}
        ]
    }
}

export const onClickAddPost = (postMessage: string) => {
    const newPost: PostsDataType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.PostsData.push(newPost)
    renderTree(state)
}

export const updateNewPostText = (newText:string) => {
    state.profilePage.messageNewPostText=newText
    renderTree(state)
}

export default state;