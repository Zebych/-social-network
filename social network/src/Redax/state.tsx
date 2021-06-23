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

export type StoreType={
    _state:RootStateType
    onClickAddPost:(postMessage: string)=>void
    updateNewPostText:(newText:string)=>void
    subscribe:(observer:()=>void)=>void
    renderTree:()=>void
    getState:()=>RootStateType
}
const store:StoreType={
    _state : {
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
    },
    onClickAddPost  (postMessage: string)  {
        const newPost: PostsDataType = {
            id: 5,
            message: postMessage,
            likesCount: 0
        }
        this._state.profilePage.PostsData.push(newPost)
        this.renderTree()
    },
    updateNewPostText  (newText:string) {
        this._state.profilePage.messageNewPostText=newText
        this.renderTree()
    },
    subscribe(observer){
        this.renderTree=observer
    },
    renderTree(){
        console.log("render")
    },
    getState(){
        return this._state
    }
}

export default store;