import dialogsPageReducer from "./DialogsPage-reducer";
import profileReducer from "./profile-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

type DialogDataType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type profilePageType = {
    PostsData: PostsDataType[]
    messageNewPostText: string
}
export type dialogsPageType = {
    MessageData: MessageType[]
    DialogData: DialogDataType[]
    newMessage: string
}
export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    renderTree: () => void
    getState: () => RootStateType
    dispatch: (action: Types) => void
}

export type Types = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof AddMessageAC> | ReturnType<typeof UpdateNewMessageTextAC>


const store: StoreType = {
    _state: {
        profilePage: {
            PostsData: [
                {id: 1, message: 'Hi,how a you?', likesCount: 2},
                {id: 2, message: 'Yo', likesCount: 3},
                {id: 3, message: 'YOyoYo', likesCount: 5}
            ],
            messageNewPostText: ""
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
            ],
            newMessage: ""
        }
    },


    subscribe(observer) {
        this.renderTree = observer
    },
    renderTree() {
        console.log("render")
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

        this.renderTree()
    }

}
export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE,

    } as const
}
export const UpdateNewMessageTextAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMassage: body
    } as const
}
export const AddPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage: postMessage
    } as const
}
export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default store;