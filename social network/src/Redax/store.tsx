import dialogsPageReducer, {AddMessageAC} from "./dialogsPage-reducer";
import profileReducer, {addPostAC, ProfileType, setUsersProfile} from "./profile-reducer";
import React from "react";

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
export type profilePageType = {
    PostsData: PostsDataType[]
    messageNewPostText: string
    profile: ProfileType
    status:string
}
 type dialogsPageType = {
    MessageData: MessageType[]
    DialogData: DialogDataType[]
    newMessage: string
}
type usersPageType = {
    users: Array<ArrayUsersType>
}
type LocationType = {
    city: string,
    country: string,
}
type PhotosType = {
    small: string,
    large: string,
}
type ArrayUsersType = {
    id: number,
    photos: PhotosType,
    name: string,
    status: string,
    followed: boolean,
    location: LocationType,
    uniqueUrlName: null,
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    renderTree: () => void
    getState: () => RootStateType
    dispatch: (action: Types) => void
}


export type Types = ReturnType<typeof addPostAC> |
    ReturnType<typeof AddMessageAC>| ReturnType<typeof setUsersProfile>


const store: StoreType = {
        _state: {
            profilePage: {
                PostsData: [
                    {id: 1, message: 'Hi,how a you?', likesCount: 2},
                    {id: 2, message: 'Yo', likesCount: 3},
                    {id: 3, message: 'YOyoYo', likesCount: 5}
                ],
                messageNewPostText: "",
                profile: {
                    aboutMe: '',
                    contacts:
                        {
                            facebook: '',
                            github: '',
                            instagram: '',
                            mainLink: '',
                            twitter: '',
                            vk: '',
                            website: '',
                            youtube: '',
                        },
                    fullName: "Any",
                    lookingForAJob: false,
                    lookingForAJobDescription: '',
                    photos:
                        {
                            large: '',
                            small: '',
                        },
                    userId: 18916,
                },
                status:'',
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
        },
        usersPage: {
            users: [
                {
                    id: 1,
                    photos: {
                        small: 'https://www.intermedia.ru/img/news_x350/358935.jpg',
                        large: 'https://www.intermedia.ru/img/news_x350/358935.jpg'
                    },
                    name: 'Dead Blonde',
                    status: 'I am a boss too',
                    followed: true,
                    location: {city: 'Vladimir', country: 'Rassia'},
                    uniqueUrlName: null
                },
                {
                    id: 2,
                    photos: {
                        small: 'https://www.intermedia.ru/img/news_x350/358935.jpg',
                        large: 'https://www.intermedia.ru/img/news_x350/358935.jpg'
                    },
                    name: 'Alex',
                    status: 'I am a boss',
                    followed: true,
                    location: {city: 'Vladimir', country: 'Rassia'},
                    uniqueUrlName: null
                },
                {
                    id: 3,
                    photos: {
                        small: 'https://www.intermedia.ru/img/news_x350/358935.jpg',
                        large: 'https://www.intermedia.ru/img/news_x350/358935.jpg'
                    },
                    name: 'Alex',
                    status: 'I am a boss',
                    followed: true,
                    location: {city: 'Vladimir', country: 'Rassia'},
                    uniqueUrlName: null
                },
            ],
        },
    },


    subscribe
(observer)
{
    this.renderTree = observer
}
,
renderTree()
{
    console.log("render")
}
,
getState()
{
    return this._state
}
,

dispatch(action)
{
    // this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

    this.renderTree()
}

}


export default store;