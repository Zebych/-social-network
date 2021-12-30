import {Dispatch} from 'redux';
import {AppStoreType} from './reduxStore';
import {usersAPI} from '../api/api';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 16,
    totalUsersCount: 0,
    currentPage: 1,
    isInProgress: false,
    isFollowingProgress: [] as string[]
}


export const usersReducer = (state: initialStateType = initialState, action: ActionsUsersReducerType): initialStateType => {
    switch (action.type) {
        case "USERS/FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)}
        case "USERS/UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "USERS/SET-USERS":
            return {...state, users: [...action.users]}
        case "USERS/SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "USERS/SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsers}
        case "USERS/TOGGLE-IS-IN-PROGRESS":
            return {...state, isInProgress: action.progress}
        case "USERS/TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                isFollowingProgress: action.progress ?
                    [...state.isFollowingProgress, action.userId] :
                    state.isFollowingProgress.filter(u => u !== action.userId)
            }
        default:
            return state
    }

}

/////////////////////////////// AC
export const follow = (userID: string) => ({type: "USERS/FOLLOW", userID}) as const
export const unfollow = (userID: string) => ({type: "USERS/UNFOLLOW", userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: "USERS/SET-USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({type: "USERS/SET-CURRENT-PAGE", currentPage}) as const
export const setTotalUsersCount = (totalUsers: number) => ({type: "USERS/SET-TOTAL-USERS-COUNT", totalUsers}) as const
export const toggleInProgress = (progress: boolean) => ({type: "USERS/TOGGLE-IS-IN-PROGRESS", progress}) as const
export const toggleIsFollowingProgress = (progress: boolean, userId: string) => ({
    type: "USERS/TOGGLE-IS-FOLLOWING-PROGRESS",
    progress,
    userId
}) as const


////////////////////////////// THUNK
export const getUsersThunk = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionsUsersReducerType>, getState: () => AppStoreType) => {
    dispatch(toggleInProgress(true))
    let data = await usersAPI.getUsers(currentPage, pageSize) //запрос на сервер
    dispatch(toggleInProgress(false)) // Меняем false на true перед запросом, чтобы показывался прелоадер
    dispatch(setUsers(data.items)) /*Сетаем юзерсвов которые нам приходят на отрисовку */
    dispatch(setTotalUsersCount(data.totalCount)) // обновляем количество totalUsers


}
export const changePageThunk = (page: number, pageSize: number) => async (dispatch: Dispatch<ActionsUsersReducerType>) => {
    dispatch(toggleInProgress(true)) // Меняем false на true перед запросом, чтобы показывался прелоадер
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleInProgress(false)) // После запроса меняем на false, чтобы когда отрисуются Юзерсы, прелоадер спрятался
    dispatch(setUsers(data.items))
}
export const unfollowUserThunk = (userId: string) => async (dispatch: Dispatch<ActionsUsersReducerType>) => {
    dispatch(toggleIsFollowingProgress(true, userId)) // диспатчим чтобы задизейблить кнопку
    let data = await usersAPI.unFollowUser(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId)) //диспатчим чтобы раздизейблить кнопку после асинхронного запроса

}
export const followUserThunk = (userId: string) => async (dispatch: Dispatch<ActionsUsersReducerType>) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let data = await usersAPI.followUser(userId) // api запрос follow
    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}


////////////////////////////////// TYPE

export type ActionsUsersReducerType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleInProgress>
    | ReturnType<typeof toggleIsFollowingProgress>


export type initialStateType = typeof initialState
export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType

}
export type PhotosType = {
    small: string
    large: string
}
export type LocationType = {
    city: string
    country: string
}
