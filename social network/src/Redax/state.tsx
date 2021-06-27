const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

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
    /* onClickAddPost: (postMessage: string) => void
     updateNewPostText: (newText: string) => void*/
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
    /* onClickAddPost(postMessage: string) {
         const newPost: PostsDataType = {
             id: 5,
             message: postMessage,
             likesCount: 0
         }
         this._state.profilePage.PostsData.push(newPost)
         this.renderTree()
     },
     updateNewPostText(newText: string) {
         this._state.profilePage.messageNewPostText = newText
         this.renderTree()
     },*/

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
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageNewPostText = action.newText
            this.renderTree()
        } else if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.PostsData.push(newPost)
            this.renderTree()
        } else if (action.type === 'ADD-MESSAGE') {
            let body = this._state.dialogsPage.newMessage
            this._state.dialogsPage.newMessage = ''
            const newMassageBody: MessageType = {
                id: 6,
                message: body
            }
            this._state.dialogsPage.MessageData.push(newMassageBody)
            this.renderTree()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessage = action.newMassage
            this.renderTree()
        }
    },

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