import Avatar1 from "../components/Profile/MyPosts/AvatarImg/Avatar1.jpg";
import Avatar2 from "../components/Profile/MyPosts/AvatarImg/Avatar2.jpg";
import Avatar3 from "../components/Profile/MyPosts/AvatarImg/Avatar3.png";
import Avatar4 from "../components/Profile/MyPosts/AvatarImg/Avatar4.jpg";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {AppStoreType} from "./reduxStore";


let initialState: initialStateType = {
    postData: [
        {id: v1(), post: "today i'l gonna be billionare", likeCounts: 12, avatar: Avatar1},
        {id: v1(), post: "lmao, nice ", likeCounts: 24, avatar: Avatar2},
        {id: v1(), post: "me too", likeCounts: 8, avatar: Avatar3},
        {id: v1(), post: "zzzzz", likeCounts: 36, avatar: Avatar4},
    ],
    profile: {} as ProfileType,
    status: "",
    editProfileError: '',
    profileInfoEditMode: false,
}


export const profileReducer = (state: initialStateType = initialState, action: ActionsProfileReducerType): initialStateType => {

    switch (action.type) {
        case "PROFILE/ADD-POST":
            const newPost: PostDataType = {id: v1(), post: action.postText, likeCounts: 0, avatar: Avatar1}
            return {...state, postData: [...state.postData, newPost]}
        case "PROFILE/SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "PROFILE/SET-STATUS":
            return {...state, status: action.status}
        case "PROFILE/UPDATE-PHOTO":
            return {...state, profile: {...state.profile, photos: {...action.photo}}}
        case "PROFILE/EDIT-PROFILE-ERROR":
            return {...state, editProfileError: action.error}
        case "PROFILE/EDIT-MODE-PROFILE-INFO":
            return {...state, profileInfoEditMode: action.value}
        default:
            return state

    }

}

//////////////////////////// AC
export const addPost = (postText: string) => ({type: "PROFILE/ADD-POST", postText: postText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: "PROFILE/SET-USER-PROFILE", profile}) as const
export const setStatus = (status: string) => ({type: "PROFILE/SET-STATUS", status}) as const
export const updatePhotoSuccess = (photo: { small: string, large: string }) => ({
    type: "PROFILE/UPDATE-PHOTO",
    photo
}) as const
export const editProfileError = (error: string) => ({type: 'PROFILE/EDIT-PROFILE-ERROR', error}) as const
export const editModeProfileInfo = (value: boolean) => ({type: "PROFILE/EDIT-MODE-PROFILE-INFO", value}) as const

//////////////////////////// THUNK
export const getUserProfileThunk = (userId: string) => async (dispatch: Dispatch<ActionsProfileReducerType>) => {
    let res = await profileAPI.userProfile(userId)
    dispatch(setUserProfile(res.data))
}
export const getUsersStatusThunk = (userId: string) => async (dispatch: Dispatch<ActionsProfileReducerType>) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data))
}
export const updateUserStatusThunk = (status: string) => async (dispatch: Dispatch<ActionsProfileReducerType>) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const updatePhotoThunk = (photo: string) => async (dispatch: Dispatch<ActionsProfileReducerType>) => {
    let res = await profileAPI.updatePhoto(photo)
    let updatedPhoto = res.data.data.photos
    if (res.data.resultCode === 0) {
        dispatch(updatePhotoSuccess(updatedPhoto))
    }
}
export const updateProfileThunk = (profileData: any) => async (dispatch: any, getState: () => AppStoreType) => {
    const profileId = getState().auth.data.id!.toString()
    let res = await profileAPI.updateProfile(profileData)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfileThunk(profileId))
        dispatch(editModeProfileInfo(false))
    } else {
        dispatch(editProfileError(res.data.messages[0]))
    }
}
//////////////////// TYPE

type ActionsProfileReducerType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof updatePhotoSuccess>
    | ReturnType<typeof editProfileError>
    | ReturnType<typeof editModeProfileInfo>


export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type PostDataType = {
    id: string
    post: string
    likeCounts: number
    avatar: string

}
export type initialStateType = {
    postData: Array<PostDataType>
    profile: ProfileType
    status: string
    editProfileError: string
    profileInfoEditMode: boolean
}
